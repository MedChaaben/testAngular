module.exports = {
  sortPhone: function (phone) {
    if (phone) {
      return phone.split(' ').sort().reverse().join('');
    } else {
      return undefined;
    }
  },
};
