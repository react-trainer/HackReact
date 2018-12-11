import React, { Component } from "react";
import { Card, Button } from "../../resources/styles/masterStyles";
import S3Uploader from "./S3Uploader";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/userReducer";
import axios from "axios";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      image_url: null,
      aboutText: ""
    };
  }
  componentDidMount() {
    this.props.getUser();
  }

  aboutHandler(input) {
    this.setState({ aboutText: input });
  }

  // async axios.put()

   handleEdit(id) {
    axios
      .put(`/api/user/${id}`, {
        about_user: this.state.aboutText
      })
      // .then((response)=>{

      //   console.log(response)
      //  return this.setState({ aboutText: "" })
        
      // }).catch(err => console.log(err));
  }

  updateImage = (user_id, fileUrl) => {
    // console.log(user_id)
    axios.put(`/api/user/img/${user_id}`, { image_url: fileUrl });
    //   .then(this.setState({ image: this.props.image }));
  };

  //"/api/user/img/:user_id"

  render() {
    const user = this.props.state.user.user;

    const submitButton = user.map((e, i) => {
      return (
        <div key={i}>
          <Card>
            <input
              value={this.state.aboutText}
              type="text"
              onChange={e => this.aboutHandler(e.target.value)}
            />
            tell us about yourself
          </Card>
          <Button
            height="25px"
            width="100px"
            onClick={() => {
              this.handleEdit(e.user_id, this.state.aboutText);
            }}
          >
            Submit
          </Button>
        </div>
      );
    });

    const s3 = user.map((e, i) => {
      return (
        <div key={i}>
          <S3Uploader
            image_url={this.state.image_url}
            updateImage={this.updateImage}
            user_id={e.user_id}
          />
        </div>
      );
    });

    return (
      <Card height="40vh" width="100vw" padding="20px">
        <Card>{s3}</Card>

        {submitButton}
      </Card>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getUser }
)(Edit);
