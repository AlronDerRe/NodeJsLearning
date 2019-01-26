
module.exports.createNewClient = function(creationYear){
    return {
        Id : Math.round(Math.random() * 100),
        CreationYear : creationYear,
        Name : "random"
    };
};

