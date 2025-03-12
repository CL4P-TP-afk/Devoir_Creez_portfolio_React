import React, {useState, useEffect} from "react";




const ModalHomeContent = () => {

    const [user,setUser] = useState([]);

    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }


    useEffect(() => {
        getUser();
    },[])


  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6">
            <img src={user.avatar_url} alt="un avatar chat bleu et blanc avec un grolot autour du cou" style={{width: "100%"}} />
          </div>
          <div className="col-md-6">
            <ul>
              <li>{user.name}</li>
              <hr className=" border border-white"/>
              <li>{user.location}</li>
              <hr className=" border border-white"/>
              <li>{user.bio}</li>
              <hr className=" border border-white"/>
              <li>Repositories : {user.public_repos}</li>
              <hr className=" border border-white"/>
              <li>Followers : {user.followers}</li>
              <hr className=" border border-white"/>
              <li>Following : {user.following}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHomeContent;
