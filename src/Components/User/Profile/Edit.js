import React, { Component } from "react";
import { Button } from "../../resources/styles/masterStyles";
import S3Uploader from "./S3Uploader";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/userReducer";
import axios from "axios";
import styled from 'styled-components'

const Card = styled.div`
  height: ${props => props.height || "41vh"};
  width: ${props => props.width || "20vw"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "rgb(34, 34, 34)"};
  color: ${props => props.color || "rgb(170, 170, 170)"};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "flex-end"};
  border-radius: ${props => props.borderRadius || "3%"};
  border: ${props => props.border || "1px solid rgb(0, 0, 0)"};
  box-shadow: ${props =>
    props.boxShadow || "0px 4px 6px -3px inset rgb(0,216,255)"};
  margin: ${props => props.margin || "25px"};
  overflow: ${props => props.overflow || "hidden"};
  background-size: ${props => props.backgroundSize || "cover"};
  object-fit: ${props => props.objectFit || "contain"};
  transition: 0.4s;`

  const OuterCard = styled.div`
  display: flex;
  `

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
        <OuterCard key={i}>
         <Card> 

          <textarea rows="4" cols="50"
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
        </OuterCard>
      );
    });

    const s3 = user.map((e, i) => {
      return (
        <div key={i}>
        <Card>
          <S3Uploader
            image_url={this.state.image_url}
            updateImage={this.updateImage}
            user_id={e.user_id}
          />
          </Card>
        </div>
      );
    });

    return (
      <Card height="50vh" width="100vw" padding="20px">
        {s3}

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
