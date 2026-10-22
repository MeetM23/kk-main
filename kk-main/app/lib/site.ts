export const SITE = {
  name: "KALAIVANI",
  fullName: "Kalaivani Real Estate",
  email: "kalaivanirealestate.2026@gmail.com",
  officePhone: { display: "95142-26547", tel: "+919514226547" },
  mobilePhone: { display: "97889-44550", tel: "+919788944550" },
  addressLines: [
    "627, Chennai Salai,",
    "Thondiyankottai,",
    "Krishnagiri Town,",
    "Krishnagiri Taluk & District,",
    "Tamil Nadu – 635001.",
  ],
  mapQuery:
    "627, Chennai Salai, Thondiyankottai, Krishnagiri, Tamil Nadu 635001",
  // TODO: paste the client's real profile URLs. Links with an empty URL are hidden.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapQuery
)}&output=embed`;

export const MAPS_DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  SITE.mapQuery
)}`;
