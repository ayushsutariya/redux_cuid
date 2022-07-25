import React, { useState, useEffect } from 'react';

function Promise_example(props) {
    const one = () => {
        return "One Executed"
    }

    const two = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve ("Two Executed")
            }, 2000);
        })
    }

    const three = () => {
        return "Three Executed"
    }

    const All = async () => {

        const o =  one();
        console.log(o);

        const t = await two();
        console.log(t);

        const th =  three();
        console.log(th);
    }

    useEffect(() => {
        All()
    },[])
    
    return (
        <div>
            
        </div>
    );
}

export default Promise_example;