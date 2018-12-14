import React from "react";
import { shallow, mount } from "enzyme";
import S3Uploader from "./S3Uploader";
import LoginStreak from "./LoginStreak";
import CompletedLessons from "./CompletedLessons"
import CompletedLessonsTitle from "./CompletedLessonsTitle";
import LoginTimeTitle from "./LoginTimeTitle";



describe('S3 renders', ()=> {
    it('renders', ()=> {      
        shallow(<S3Uploader user_id="8"/>);
   })
});

describe('LoginStreak renders', ()=>{
    it('renders', ()=>{
        shallow(<LoginStreak />);
    })
    it('renders CompletedLessons', ()=>{
        shallow(<CompletedLessons/>);
    })  
})

describe("Completed Lessons Title renders", () => {
    it('renders', ()=> {
        shallow(<CompletedLessonsTitle/>);
    })
})

describe("Login Time Title renders", () => {
    it('renders', ()=> {
        shallow(<LoginTimeTitle/>);
    })
})
    




