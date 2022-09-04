//resource from https://dev.to/sh20raj/imgur-api-image-uploader-using-javascript-html-4b1c

import { useState } from "react";

function Home() {
  const [url, setUrl] = useState("");

  const handleImgChange = (ev) => {
    const formdata = new FormData();
    formdata.append("image", ev.target.files[0]);
    console.log(ev.target.files[0]);
    console.log("hello");
    fetch("https://api.imgur.com/3/image/", {
      method: "post",
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_API_KEY}`,
      },
      body: formdata,
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("success", data.data.link);
        setUrl(data.data.link);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="tutorial">
        <a
          href="https://docs.google.com/document/d/1XOvagMfdJ6g7poTh2oZ2k5fm9O9CDStKdwK-eLDoCZg/edit?usp=sharing"
          target="_blank"
        >
          <img
            src="https://www.gssd.ca/school/dlc/Lists/FeaturedImageLinks/Attachments/6/tutorial.jpg"
            alt="tutorial"
          />
        </a>
      </div>
      <img src="https://i.imgur.com/U7afLiO.png" id="img" height="200px" />
      <br />
      <input type="file" id="file" onChange={handleImgChange} />
      <br />
      <strong>
        <p id="url">{url}</p>
      </strong>
    </div>
  );
}

export default Home;
