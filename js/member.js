var member = [];

for (var i = 0; i < 50; i++) {
  if (i < 9) {
    member[i] = {
      name: "00" + (i + 1) + "号",
    };
  }
  else if (i < 99) {
    member[i] = {
      name: "0" + (i + 1) + "号",
    };
  }
  else {
    member[i] = {
        name: (i + 1) + "号",
    };
  }
}