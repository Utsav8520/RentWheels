const prisma = require("../prismaClient");


exports.getVehicles = async (req) => {
    return req.paginatedResults;
};


exports.getStats = async (req) => {
    const ownerId = req.user.userId;
  
    // Count the total unique users who have made a booking with the owner's vehicles
    const totalUsers = await prisma.booking.count({
        where:{
            vehicle:{
                ownerId
            }
        }
    });
  
    // Count the total vehicles owned by the owner
    const totalVehicles = await prisma.vehicle.count({
      where: { ownerId },
    });
  
    // Count the total bookings for the owner's vehicles
    const totalBookings = await prisma.booking.count({
      where: {
        vehicle: { ownerId },
      },
    });
  
    // Count the total payments for bookings on the owner's vehicles
    const totalPayments = await prisma.payment.count({
      where: {
        booking: {
          vehicle: { ownerId },
        },
      },
    });
  
    console.log(totalUsers,totalVehicles,totalBookings,totalPayments);
    return {
      totalUsers, 
      totalVehicles,
      totalBookings,
      totalPayments,
    };
  };


exports.getBookings = async (req) => {
    const ownerId = req.user.userId;
    return prisma.booking.findMany({
        where:{
            vehicle:{
                ownerId
            }
        }
    });
}

exports.getReviews = async (req) => {
    const ownerId = req.user.userId;
    return prisma.review.findMany({
        where:{
            vehicle:{
                ownerId
            }
        }
    });
}