var connection = require("./connection.js");


function printQuestionMarks(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function objToSQL(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
        }
    }
};


var orm = {
    //selectAll
    all: function(tableInput, cb) {
        
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            console.log("hewoo");
            if(err) {
                throw err
            }
            
            cb(result);
        }); 
    },
    //insertOne
    create: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) {
            throw err
            }
        callback(result);
        });
    },
    //updateOne
    update: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE" + table + "SET ";

        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    }
};


//module.exports

module.exports = orm;







