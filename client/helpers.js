module.exports = {
  average: reviews => {
    return (
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    );
  },

  formatDate: date => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return `${months[parseInt(month) - 1]} ${day}, ${year}`;
  },

  sortBy: (reviews, sortBy) => {
    if (sortBy === "dateDesc")
      return reviews.sort((a, b) =>
        a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      );
    if (sortBy === "dateAsc")
      return reviews.sort((a, b) =>
        a.date > b.date ? 1 : a.date < b.date ? -1 : 0
      );
    if (sortBy === "rateDesc")
      return reviews.sort((a, b) =>
        a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
      );
    if (sortBy === "rateAsc")
      return reviews.sort((a, b) =>
        a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
      );
  }
};
