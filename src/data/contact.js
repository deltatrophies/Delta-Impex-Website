export const CONTACT_DETAILS = {
  phone: "+91 7669393511",
  email: "gsbedi99@gmail.com",
  address:
    "No. 111-A, Janta Colony, Near Maqsudan, G.T. Road, Jalandhar, Punjab - 144001, India",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?hl=en&ll=31.370611,75.546967&z=17&t=m&output=embed",
  googleMapsUrl:
    "https://www.google.com/maps/place/DELTA+TROPHIES/@31.3706156,75.5443921,17z/data=!3m1!4b1!4m6!3m5!1s0x391a5015b98602cb:0x8610f441cafe4132!8m2!3d31.370611!4d75.546967!16s%2Fg%2F11c1lk9mbf",
  whatsapp: "+91 7669393511",
  businessHours: "9:00 AM - 7:00 PM",
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
