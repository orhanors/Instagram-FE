import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";
import { BsMusicNote } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import backend from "../../helpers/client";
import "../nav-bar/navBar.scss"
import SearchResult from "./SearchResult";
import './SearchResult.scss';

const Search = () => {
  let [users, setUsers] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [filteredUsers, setFilteredUsers] = useState([]);

  const downshiftOnChange = (selectedUser) => {
    // alert(`you have selected ${selectedUser.name} ${selectedUser.surname}`);
  };

  const getUsers = async () => {
    const response = await backend({ url: "/users/" });

    setUsers(response.data);
  };

  useEffect(() => getUsers(), []);

  const filterUsers = () => {
      let result = users.filter(user => user.username.includes(searchValue))
      console.log('filtered result: ', result)
      setFilteredUsers(result);
      return result;
  }

  useEffect(()=>{
    filterUsers();
}, [searchValue]);

  return (
    <Downshift
      onChange={downshiftOnChange}
      itemToString={(item) => (item ? item.id : "")}
    >
      {({
        selectedItem,
        getInputProps,
        getItemProps,
        highlightedIndex,
        isOpen,
        inputValue,
        getLabelProps,
      }) => (
        <div>
          {/*console.log("inputValue::::::", inputValue)*/}
          <br />
          <input
            type="text"
            className="search"
            {...getInputProps({
              placeholder:  "Search",
              onChange: setSearchValue(inputValue),
            })}
          />
          {isOpen ? (
            <div>
              {filteredUsers &&
                filteredUsers.slice(0, 5).map((item, index) => (
                  <div
                    style={{ background: "red" }}
                    {...getItemProps({ key: index, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal",
                    }}
                    className='results-container'
                  >
                    {item && (
                      <Row className="pr-2 pl-2">
                        <Link to={`/${item.username}`}>
                          {/*<p
                            style={{
                              color: "black",
                              padding: "5px 10px",
                              marginTop: "0px",
                              marginBottom: "0px",
                            }}
                          >
                            {item.username}
                        </p>*/}
                            <SearchResult image={item.image} username={item.username} name={item.name} surname={item.surname} />
                        </Link>
                      </Row>
                    )}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

export default Search;
