import React from "react";
import * as C from './styles'
import Student from "../../assets/ImageStudent.png";
import Instructor from "../../assets/ImageInstructor.png";

const Options = () => {
  console.log(Student)
  return (
    <C.ContainerOptions>
      <C.TittleSoftware>What is <span>Skilline?</span></C.TittleSoftware>
      <C.SubTittle>
        Skilline is a platform that allows educators to create online classes whereby they can<br/> store the course materials online; manage assignments, quizzes and exams; monitor<br/>  due dates; grade results and provide students with feedback all in one place.
      </C.SubTittle>
      <C.ContainerCards>
        <C.Card img={Instructor}>
          <C.Blur />
          <C.ContentCard>
            <C.TittleContentCard> FOR INSTRUCTORS </C.TittleContentCard>
            <C.ButtonContentOne> Start a class today </C.ButtonContentOne>
          </C.ContentCard>
        </C.Card>
        <C.Card img={Student}>
        <C.Blur />
        <C.ContentCard>
        <C.TittleContentCard> FOR STUDENTS </C.TittleContentCard>
            <C.ButtonContentTwo> Enter access code </C.ButtonContentTwo>
        </C.ContentCard>
          </C.Card>
      </C.ContainerCards>
    </C.ContainerOptions>
  )
};

export default Options;
