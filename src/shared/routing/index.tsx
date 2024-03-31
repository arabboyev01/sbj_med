type Disease = {
  letter?: string;
};

type Id = number | null | undefined;

type Slug = string;

const routing = {
  home: "/",
  about: "/about",
  news: "/news",
  programs: "/programs",
  partnership: "/partnership",
  contact: "/contact",
  doctors: "/doctors",
  services: "/services",
  equipments: "/equipments",
  phone: "tel:+998712037071",
  diseases: (params: Disease) => {
    const searchParams = new URLSearchParams({ ...params });
    const url = `/diseases?${searchParams}`;

    return url;
  },
  diseaseById: (id: Id) => `/diseases/${id}`,
  doctorById: (id: Id) => `/doctors/${id}`,
  equipmentById: (id: Id) => `/equipments/${id}`,
  blogById: (id: Id) => `/news/${id}`,
  blogBySlug: (slug: Slug) => `/news/${slug}`,
  serviceBySlug: (slug: Slug) => `/services/${slug}`,
  programsBySlug: (slug: Slug) => `/programs/${slug}`,
};

export default routing;
