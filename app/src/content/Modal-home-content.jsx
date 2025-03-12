import React, {useState, useEffect} from "react";




const ModalHomeContent = () => {

    const [avatar,setAvatar] = useState([]);

    const getAvatar = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setAvatar(json);
    }


    useEffect(() => {
        getAvatar();
    },[])


  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6">
            <img src={avatar.avatar_url} alt="un avatar chat bleu et blanc avec un grolot autour du cou" style={{width: "100%"}} />
          </div>
          <div className="col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHomeContent;
