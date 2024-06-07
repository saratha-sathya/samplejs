export const moviesindex=(req,res)=>{
    res.send("getmovies");
}

export const moviescreate=(req,res)=>{

    res.send("post all movies");
};
export const moviespost=(req,res)=>{
    res.send("update movies");
};


export const moviesdelete=(req,res)=>{
    res.delete("delete movies");
};