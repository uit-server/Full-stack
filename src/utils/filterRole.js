const onFocus = (target, changable) => {
    for(var i = 0; i < changable.length; i++) {
        if (changable[i].content === target) {
            changable[i].signal = 1;  

    } else {
        changable[i].signal = 0;  

    }

}

return changable;
}

export default onFocus;