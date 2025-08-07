function Homework(props) {
    return (
        <div>
            <h1>과제명 : {props.name}</h1>
            <h2>이 과제는 {props.total}개의 과제물이 있습니다.</h2>
        </div>
    )
}

export default Homework 
