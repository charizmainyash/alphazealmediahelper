const mongoose=require("mongoose");

async function connnectionFunction(URL)
{
    return mongoose.connect(URL);
};

module.exports={connnectionFunction}

