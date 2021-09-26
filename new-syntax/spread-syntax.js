const item = { type: "👕", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// Good Code
const shirt0 = Object.assign(item, detail);

// Better! Code
const shirt = { ...item, ...detail, price: 40 };
