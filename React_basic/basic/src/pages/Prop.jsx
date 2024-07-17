import { useState } from "react";

const Prop = (props) => {
    // home에 써둔 매개 변수의 데이터를 props로 받는다.

    const [name, setName] = useState();
    
    // setName(props.n);

    return(
        <div className="home">
            <h2>Prop.jsx</h2>
            <p>
                props 값 : {props.n}, {props.age}, {props.nation}
            </p>
        </div>
    );
}

export default Prop;