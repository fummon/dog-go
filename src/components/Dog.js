import React from 'react';

function Dog (props) {

    
    return (
        <div className="container mt-5 d-flex justify-content-center">
    <div className="card shadow p-3 mb-5 bg-white rounded">
        <div className="d-flex align-items-center">
            <div className="image"> <img src={props.img} className="rounded" width="155" alt={props.name}/> </div>
            <div className="ml-3 w-100">
                <h5 className="mb-0 mt-0">{props.name}</h5> 
                <span>{props.temperament}</span><br/>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column"> <span className="height">Height</span> <span className="number1 ">{props.height}"</span> </div>
                    <div className="d-flex flex-column"> <span className="weight">Weight</span> <span className="number2">{props.weight}lbs</span> </div>
                    <div className="d-flex flex-column"> <span className="lifeSpan">Life Span</span> <span className="number3">{props.lifeSpan}</span> </div>
                </div>
            </div>
        </div>
    </div>
</div>

        
    );
}

export default Dog; 