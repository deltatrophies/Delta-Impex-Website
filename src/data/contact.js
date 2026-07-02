export const CONTACT_DETAILS = {
  phone: "9876847521",
  email: "[Email Address]",
  address: "No. 111-A, Janta Colony, Near Maqsudan, G.T. Road, Jalandhar, Punjab – 144001, India",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=No.%20111-A%2C%20Janta%20Colony%2C%20Near%20Maqsudan%2C%20G.T.%20Road%2C%20Jalandhar%2C%20Punjab%20144001%2C%20India&output=embed",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=No.%20111-A%2C%20Janta%20Colony%2C%20Near%20Maqsudan%2C%20G.T.%20Road%2C%20Jalandhar%2C%20Punjab%20144001%2C%20India",
  whatsapp: "[WhatsApp Number]",
  businessHours: "[Business Hours]",
};

export const hasContactValue = (value) =>
  Boolean(value && !value.trim().startsWith("["));

export const CONTACT_LABELS = {
  phone: "Phone",
  email: "Email",
  address: "Address",
  whatsapp: "WhatsApp",
  businessHours: "Business Hours",
};
