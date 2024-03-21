const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const multer = require("multer");

const port = 5000;

const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let origialname = file.originalname;
      let ext = origialname.split(".").pop();
      let filename = origialname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});

//use express static folder
app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.listen(port, () => {
  console.log("Server is Running");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_insightblend",
  port: 3306,
});

// Check Database Connection

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});

app.get("/Add", (req, res) => {
  res.send({
    message: "Hai",
  });
});

//Admin Details POST

app.post("/Admin", (req, res) => {
  console.log(req.body.admin_name);
  let qry =
    "insert into tbl_admin (admin_name,admin_email,admin_password) values('" +
    req.body.admin_name +
    "','" +
    req.body.admin_email +
    "','" +
    req.body.admin_password +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Category", (req, res) => {
  console.log(req.body.category_name);
  let qry =
    "insert into tbl_category (category_name) values('" +
    req.body.category_name +
    "')";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Genres", (req, res) => {
  console.log(req.body.genres_name, req.body.category_id);
  let qry =
    "insert into tbl_genres (genres_name,category_id) values('" +
    req.body.genres_name +
    "','" +
    req.body.category_id +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/language", (req, res) => {
  console.log(req.body.language_name);
  let qry =
    "insert into tbl_language (language_name) values('" +
    req.body.language_name +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Certification", (req, res) => {
  console.log(req.body.certification_name);
  let qry =
    "insert into tbl_certification (certification_name) values('" +
    req.body.certification_name +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//ShowRunner Details POST

app.post(
  "/Showrunner",

  upload.fields([
    { name: "showrunner_photo", maxCount: 1 },
    { name: "showrunner_proof", maxCount: 1 },
  ]),
  (req, res) => {
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var postphotosrc = `http://127.0.0.1:${port}/images/${fileValue.showrunner_photo[0].filename}`;
    var postproofsrc = `http://127.0.0.1:${port}/images/${fileValue.showrunner_proof[0].filename}`;
    console.log(req.body);
    let qry =
      "insert into tbl_showrunner(showrunner_name,showrunner_email,showrunner_password,showrunner_proof,showrunner_photo,showrunner_username) values('" +
      req.body.showrunner_name +
      "','" +
      req.body.showrunner_email +
      "','" +
      req.body.showrunner_password +
      "','" +
      postproofsrc +
      "','" +
      postphotosrc +
      "','" +
      req.body.showrunner_username +
      "')";
    console.log(qry);
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);

app.post(
  "/Upload",
  upload.fields([
    { name: "upload_file", maxCount: 1 },
    { name: "upload_thumbnail", maxCount: 1 },
  ]),
  (req, res) => {
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var postimgsrc = `http://127.0.0.1:${port}/images/${fileValue.upload_file[0].filename}`;
    var postpicsrc = `http://127.0.0.1:${port}/images/${fileValue.upload_thumbnail[0].filename}`;

    console.log(req.body);
    let qry =
      "insert into tbl_upload (upload_file,upload_desc,upload_thumbnail,showrunner_id,genres_id,certification_id,language_id,upload_title,upload_date) values('" +
      postimgsrc +
      "','" +
      req.body.upload_desc +
      "','" +
      postpicsrc +
      "','" +
      req.body.showrunner_id +
      "','" +
      req.body.genres_id +
      "','" +
      req.body.certification_id +
      "','" +
      req.body.language_id +
      "','" +
      req.body.upload_title +
      "',curdate())";
    console.log("hii");
    console.log(qry);
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);

//User Details POST

app.post("/User", (req, res) => {
  console.log(req.body.user_name);
  let qry =
    "insert into tbl_user (user_name,user_email,user_password,user_contact) values('" +
    req.body.user_name +
    "','" +
    req.body.user_email +
    "','" +
    req.body.user_password +
    "','" +
    req.body.user_contact +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Follower", (req, res) => {
  console.log(req.body.follower_id);
  let qry =
    "insert into tbl_follower (user_id,showrunner_id) values('" +
    req.body.user_id +
    "','" +
    req.body.showrunner_id +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Like", (req, res) => {
  console.log(req.body.like_id);
  let qry =
    "insert into tbl_like (upload_id,user_id) values('" +
    req.body.upload_id +
    "','" +
    req.body.user_id +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Comment", (req, res) => {
  console.log(req.body.comment_id);
  let qry =
    "insert into tbl_comment (comment_content,user_id,upload_id) values('" +
    req.body.comment_content +
    "','" +
    req.body.user_id +
    "','" +
    req.body.upload_id +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/Complaint", (req, res) => {
  console.log(req.body.comment_id);
  let qry =
    "insert into tbl_complaint (complaint_content,complaint_reply,user_id) values('" +
    req.body.complaint_content +
    "','" +
    req.body.complaint_reply +
    "','" +
    req.body.user_id +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post("/favorite", (req, res) => {
  let qry =
    "insert into tbl_favorite (user_id,upload_id) values('" +
    req.body.user_id +
    "','" +
    req.body.upload_id +
    "')";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//Admin Select

app.get("/Admin/", (req, res) => {
  const admin_id = req.params.admin_id;
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_admin ";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result,
      });
    }
  });
});

//Admin Category Select

app.get("/Category", (req, res) => {
  const category_id = req.params.category_id;
  // const Id = req.params.id
  // console.log(user_id);
  let qry = "select * from tbl_category";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result,
      });
    }
  });
});

//Select all Genres

app.get("/Genres", (req, res) => {
  let qry = "select * from tbl_genres";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        genres: result,
      });
    }
  });
});

//Admin Genres Select By Id

app.get("/Genres/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_genres  where genres_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        genres: result,
      });
    }
  });
});

//Admin Language Select

app.get("/Language/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_language  where language_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        langugae: result,
      });
    }
  });
});

//Admin Language Select All

app.get("/Language", (req, res) => {
  let qry = "select * from tbl_language";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        language: result,
      });
    }
  });
});

//Admin Certification select

app.get("/Certification/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_certification  where certification_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        certification: result,
      });
    }
  });
});

//Admin Certification select ALL

app.get("/Certification", (req, res) => {
  let qry = "select * from tbl_certification";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        certification: result,
      });
    }
  });
});

//ShowRunner  select

app.get("/Showrunner/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_showrunner  where showrunner_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        showrunner: result[0],
      });
    }
  });
});

//ShowRunner Select all

app.get("/Showrunner", (req, res) => {
  // const user_id = req.params["genres_id "];
  // const Id = req.params.id;
  // console.log(Id);
  let qry = "select * from tbl_showrunner  where status = 0 ";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        showrunner: result,
      });
    }
  });
});


//Upload  select

app.get("/Upload/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  let qry =
    "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where u.showrunner_id = " +
    Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        upload: result,
      });
    }
  });
});

//UPload Report Show

app.get("/Upload", (req, res) => {
  // const user_id = req.params["genres_id "];
  // const Id = req.params.id;
  let qry =
    "select * from tbl_upload u inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id  ";
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        upload: result,
      });
    }
  });
});


//Upload Select All for user

app.get("/Upload/:Cid/:Gid/:Lid", (req, res) => {
  // const user_id = req.params["genres_id "];
  let { Cid, Gid, Lid } = req.params;
  Cid = parseInt(Cid);
  Gid = parseInt(Gid);
  Lid = parseInt(Lid);
  if (Cid !== 0 && Gid !== 0 && Lid !== 0) {
    // Code for Cid, Gid, and Lid

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where g.genres_id = " +
      Gid +
      " and c.certification_id  =" +
      Cid +
      " and l.language_id  = " +
      Lid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid !== 0 && Gid !== 0 && Lid === 0) {
    // Code for Cid and Gid

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where g.genres_id = " +
      Gid +
      " and c.certification_id  =" +
      Cid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid !== 0 && Gid === 0 && Lid !== 0) {
    // Code for Cid and Lid

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where c.certification_id  =" +
      Cid +
      " and l.language_id " +
      Lid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid !== 0 && Gid === 0 && Lid === 0) {
    // Code for Cid only

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where  c.certification_id  =" +
      Cid;
    console.log(qry);
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid === 0 && Gid !== 0 && Lid !== 0) {
    // Code for Gid and Lid

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where g.genres_id = " +
      Gid +
      "  and l.language_id " +
      Lid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid === 0 && Gid !== 0 && Lid === 0) {
    // Code for Gid only

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where g.genres_id = " +
      Gid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid === 0 && Gid === 0 && Lid !== 0) {
    // Code for Lid only

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where  l.language_id " +
      Lid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  } else if (Cid === 0 && Gid === 0 && Lid === 0) {
    // Code for no parameters

    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id";
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  }
});



//Upload Select All for user

app.get("/ShowrunnerUpload/:Sid", (req, res) => {
  // const user_id = req.params["genres_id "];
  let { Sid } = req.params;
    let qry =
      "select * from tbl_upload u inner join tbl_genres g on u.genres_id = g.genres_id inner join tbl_certification c on u.certification_id = c.certification_id inner join tbl_language l on u.language_id = l.language_id inner join tbl_showrunner s on u.showrunner_id =s.showrunner_id where s.showrunner_id =  "+Sid;
    db.query(qry, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          upload: result,
        });
      }
    });
  
});



//user  select

app.get("/User/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_user  where user_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result[0]
      });
    }
  });
});

//Follower  select

app.get("/Follower/:id/:Uid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const {id, Uid} = req.params;
  let qry = "select * from tbl_follower  where user_id = " + Uid+" and showrunner_id = "+id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        follow: false,
      });
    } else {
      res.send({
        follow: true,
      });
    }
  });
});



app.get("/MyPlayList/:id/:Uid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const {id, Uid} = req.params;
  let qry = "select * from tbl_favorite  where user_id = " + id+" and upload_id = "+Uid;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        follow: true,
      });
    } else {
      res.send({
        follow: false,
      });
    }
  });
});




app.get("/MyPlaylist/:id/", (req, res) => {
  // const user_id = req.params["genres_id "];
  const {id} = req.params;
  let qry = "select * from tbl_favorite f inner join tbl_upload s on f.upload_id = s.upload_id inner join tbl_showrunner r on s.showrunner_id = r.showrunner_id  where user_id = " + id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        follow: result,
      });
    } else {
      res.send({
        follow: [],
      });
    }
  });
});


app.get("/MyFollower/:id/", (req, res) => {
  // const user_id = req.params["genres_id "];
  const {id} = req.params;
  let qry = "select * from tbl_follower f inner join tbl_showrunner s on f.showrunner_id = s.showrunner_id  where user_id = " + id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        follow: result,
      });
    } else {
      res.send({
        follow: [],
      });
    }
  });
});

//Like  select

app.get("/Like/:id/:pid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  const Pid = req.params.pid;
  console.log(Id);
  let qry =
    "SELECT * FROM tbl_like WHERE user_id = '" +
    Id +
    "' AND upload_id = '" +
    Pid +
    "' ";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        like: true,
      });
    } else {
      res.send({
        like: false,
      });
    }
  });
});

app.get("/LikeCount/:pid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Pid = req.params.pid;
  let qry =
    "SELECT count(like_id) as count FROM tbl_like WHERE  upload_id = '" +
    Pid +
    "' ";
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        like: result[0],
      });
    } else {
      res.send({
        like: "",
      });
    }
  });
});

//Comment  select

app.get("/Comment/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  let qry =
    "select * from tbl_comment  c inner join tbl_user u on c.user_id = u.user_id where upload_id = " +
    Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        Comment: result,
      });
    }
  });
});

//Complaint  select

app.get("/Complaint/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_complaint  where complaint_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        complaint: result,
      });
    }
  });
});

//Favorite  select

app.get("/Favorite/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "select * from tbl_favorite  where favorite_id = " + Id;
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        favorite: result,
      });
    }
  });
});

//Admin  Delete

app.delete("/Admin/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_admin  where admin_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        admin: result,
      });
    }
  });
});

//Category  Delete

app.delete("/Category/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_category where category_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        category: result,
      });
    }
  });
});

//Genres  Delete

app.delete("/Genres/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_genres where genres_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        genres: result,
      });
    }
  });
});

//Language  Delete

app.delete("/Language/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_language where language_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        language: result,
      });
    }
  });
});

//Certification  Delete

app.delete("/Certification/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_certification where certification_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        certification: result,
      });
    }
  });
});

//ShowRunner  Delete

app.delete("/Showrunner/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_showrunner where showrunner_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        showrunner: result,
      });
    }
  });
});

//Upload  Delete

app.delete("/Upload/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_upload where upload_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        upload: result,
      });
    }
  });
});

//user  Delete

app.delete("/User/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_user where user_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        user: result,
      });
    }
  });
});

//follower  Delete

app.delete("/Follower/:id/:Uid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const {id, Uid} = req.params;
  let qry = "delete from tbl_follower where user_id = "+ Uid+ " and showrunner_id = "+id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        follower: result,
      });
    }
  });
});

//like  Delete

app.delete("/Like/:id/:pid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  const Pid = req.params.pid;
  console.log(Id);
  let qry =
    "delete from tbl_like where user_id = " + Id + " and upload_id = " + Pid;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        like: result,
      });
    }
  });
});

//Comment  Delete

app.delete("/Comment/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_comment where comment_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        comment: result,
      });
    }
  });
});

//Complaint Delete

app.delete("/Complaint/:id", (req, res) => {
  // const user_id = req.params["genres_id "];
  const Id = req.params.id;
  console.log(Id);
  let qry = "delete from tbl_complaint where complaint_id = " + Id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        complaint: result,
      });
    }
  });
});

//Favorite Delete

app.delete("/Favorite/:id/:Upid", (req, res) => {
  // const user_id = req.params["genres_id "];
  const {id,Upid} = req.params;
  console.log(req.params);
  let qry = "delete from tbl_favorite where user_id = " + id + " and  upload_id = "+ Upid ;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        favorite: result,
      });
    }
  });
});

//Update Admin

app.patch("/Admin/:id", (req, res) => {
  const id = req.params.id;
  const { admin_name, admin_email, admin_password } = req.body;
  let qry =
    "update tbl_admin set admin_name = '" +
    admin_name +
    "',admin_email='" +
    admin_email +
    "',admin_password ='" +
    admin_password +
    "' where admin_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update Category

app.patch("/Category/:id", (req, res) => {
  const id = req.params.id;
  const { category_name } = req.body;
  let qry =
    "update tbl_category set category_name = '" +
    category_name +
    "' where category_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update Genres

app.patch("/Genres/:id", (req, res) => {
  const id = req.params.id;
  const { genres_name } = req.body;
  let qry =
    "update tbl_genres set genres_name = '" +
    genres_name +
    "' where genres_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update Language

app.patch("/Language/:id", (req, res) => {
  const id = req.params.id;
  const { language_name } = req.body;
  let qry =
    "update tbl_language set language_name = '" +
    language_name +
    "' where language_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update Certification

app.patch("/Certification/:id", (req, res) => {
  const id = req.params.id;
  const { certification_name } = req.body;
  let qry =
    "update tbl_certification set certification_name = '" +
    certification_name +
    "' where certification_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update ShowRunner

app.patch("/HostUpdate/:id", (req, res) => {
  const id = req.params.id;
  const {
    showrunner_name,
    showrunner_username,
    showrunner_email,
  } = req.body;
  let qry =
    "update tbl_showrunner set showrunner_name = '" +
    showrunner_name +
    "',showrunner_username = '" +
    showrunner_username +
    "',showrunner_email = '" +
    showrunner_email +
    "' where showrunner_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});



app.patch("/ShowrunnerUpdate/:id", (req, res) => {
  const id = req.params.id;
  
  let qry =
    "update tbl_showrunner set status = 1 where showrunner_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});


app.patch("/ShowrunnerReject/:id", (req, res) => {
  const id = req.params.id;
  
  let qry =
    "update tbl_showrunner set status = 2 where showrunner_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update upload

app.patch("/Upload/:id", (req, res) => {
  const id = req.params.id;
  const { upload_file, upload_desc } = req.body;
  let qry =
    "update tbl_upload set upload_file = '" +
    upload_file +
    "',upload_desc = '" +
    upload_desc +
    "' where upload_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update user

app.patch("/UserUpdate/:id", (req, res) => {
  const id = req.params.id;
  const { user_name, user_contact,user_email} =
    req.body;
  let qry =
    "update tbl_user set user_name = '" +
    user_name +
    "',user_contact = '" +
    user_contact +
    "',user_email = '" +
    user_email +
    "' where user_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update Comment

app.patch("/Comment/:id", (req, res) => {
  const id = req.params.id;
  const { comment_content } = req.body;
  let qry =
    "update tbl_comment set comment_content = '" +
    comment_content +
    "' where comment_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

//Update Complaint

app.patch("/Complaint/:id", (req, res) => {
  const id = req.params.id;
  const { complaint_content, complaint_reply } = req.body;
  let qry =
    "update tbl_complaint set complaint_content = '" +
    complaint_content +
    "',complaint_reply = '" +
    complaint_reply +
    "' where complaint_id = " +
    id;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data updated",
      });
    }
  });
});

app.post("/login", async (req, res) => {
  let selQry1 =
    (await "select * from tbl_admin where admin_email='") +
    req.body.email +
    "' and admin_password='" +
    req.body.password +
    "'";
  let selQry2 =
    (await "select * from tbl_user where user_email='") +
    req.body.email +
    "' and user_password='" +
    req.body.password +
    "' ";
  let selQry3 =
    (await "select * from tbl_showrunner where showrunner_email='") +
    req.body.email +
    "' and showrunner_password='" +
    req.body.password +
    "' and status = 1";
  db.query(selQry1, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].admin_id,
        login: "admin",
      });
    }
  });
  db.query(selQry2, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].user_id,
        login: "user",
      });
    }
  });
  db.query(selQry3, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].showrunner_id,
        login: "showrunner",
      });
    }
  });
});
