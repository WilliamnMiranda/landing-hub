import React from 'react'
import * as C from './style'
import ClassImage from '../../assets/ImageClass.png'
const Class = () => {
  return (
    <C.ContainerClass>
        <C.ContainerText>
            <C.TittleClass>
                <C.DecorationTittle />
                Everything you can do in a physical classroom, <span> <br /> you can do with Skilline</span>
            </C.TittleClass>
            <C.SubTittle> 
            Skilline’s school management software helps traditional<br/> and online schools manage scheduling, attendance,<br/> payments and virtual classrooms all in one secure cloud-based system.
            </C.SubTittle>
        </C.ContainerText>
        <C.ContainerImage>
            <C.CubeOne></C.CubeOne>
            <C.CubeTwo></C.CubeTwo>
            <C.ImageClass src={ClassImage}/>
        </C.ContainerImage>
    </C.ContainerClass>
  )
}

export default Class