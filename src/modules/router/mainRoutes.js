const express=require("express");
const router=express.Router();


router.use("/users",require("../user/userRouter"));
router.use("/categories",require("../category/categoryRouter"));
router.use("/rating",require("../rating/ratingRouter"));
router.use("/services",require("../services/servicesRouter"));
router.use("/cities",require("../city/cityRouter"));
router.use("/keywords",require("../keywordSearch/keywordSearchRouter"))
router.use("/specialOffers",require("../specialOffers/specialOffersRouter"))
router.use("/providers",require("../provider/providerRouter"))
router.use("/providerServices",require("../providerServices/providerServicesRouter"))
router.use("/providerWorkingdays",require("../providerWorkingDay/providerWorkingdayRouter"));
router.use("/bookings",require("../booking/bookingRouter"))



module.exports=router;