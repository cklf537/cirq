
export const filterTages = (questions, tags)=>{
    // const {totalTags} = tags;
    const filteredTages = [];
    for(const tag in tags){
        if(tag.active === true){
            filteredTages = [...tag]
        }
    }

    return filteredTages;
}