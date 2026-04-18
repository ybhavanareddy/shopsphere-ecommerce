import jwt from "jsonwebtoken";

//Auth Middleware to protect routes
const protect = (req,res,next)=>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"Unauthorized"});
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized, invalid token"});
    }
}

export default protect;