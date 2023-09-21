

// // this middleware will check if the user admin or seller or customer

// const authorizedMiddleware = (permittedRoles) => {
//     return function (req, resp, next) {

//         //first get the user from the req 
//         const user = req.user

//         //check if the user has any of the permittedRoles

//         let isPermitted = false;

//         permittedRoles.map((role) => {

//             // the roles can be "seller" or "admin"  ["seller", ["admin"]]
//             if (user.role.includes(role)) {
//                 return isPermitted = true
//             }
//         })

//         //if role  not match then throw an error

//         if (!isPermitted) {
//             return resp.status(403).send({ message: "Permission Denied" })
//         }

//         //if yes then return next()

//         return next()

//     }
// }


// module.exports = authorizedMiddleware;



// ______________________Fresh Code for Authorized Middleware_______________________________________________






const authorizedMiddleware = (permittedRoles) => {
    return function (req, resp, next) {

        const user = req.user                                              //getting the user

        let isPermitted = false;

        permittedRoles.map((role) => {
            if (user.role.includes(role)) {
                return isPermitted = true
            }
        })
        if (!isPermitted) {
            return resp.status(403).send({ message: "Permission Denied" })
        }
        return next()

    }
}

module.exports = authorizedMiddleware;
