import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface DoctorSpecialization {
    id: number
    title_uz: string
    title_ru: string
    title_en: string
    desc_uz: string
    desc_ru: string
    desc_en: string
    desc: string
    image: string
}

export type DoctorType = {
    id: number
    first_name: string
    last_name: string
    about_en: string
    about_ru: string
    about_uz: string
    appointment_per_hour: number
    appointment_times: string[]
    created: string
    is_active: boolean
    slug: string
    work_start_time: string
    work_end_time: string
    images: {
       image: string|StaticImport|undefined
    }[]
    specialization: DoctorSpecialization[]
    user_id: number | null; 
}

export type ProgramListType = {
    id: number
    title_en: string
    title_ru: string
    title_uz: string
    desc_en: string
    desc_ru: string
    desc_uz: string
    slug: string
    colors: string
    appointment_per_hour: number
    appointment_times: string[]
    clients_num: number
    doctors_num: number
    operations_num: number
    articles_num: number
    work_start_time: string
    work_end_time: string
    images: {
        id: number
        image: string
        created: string
        modified: string
    }[]
    is_active: boolean
    created: string
    modified: string
    className?: string
    descOn?: boolean
    size?: string
}
export type BannerType = {
    id: number
    created: string
    desc: string
    desc_en: string
    desc_ru: string
    desc_uz: string
    image: string
    is_active: boolean
    modified: string
    slug: string
    title: string
    title_en: string
    title_ru: string
    title_uz: string
}
export type ServicesType = {
    id: number;
    title_en: string;
    title_ru: string;
    title_uz: string;
    desc_en: string;
    desc_ru: string;
    desc_uz: string;
    appointment_per_hour: number;
    appointment_times: string[];
    created: string;
    modified: string;
    slug: string;
    work_start_time: string;
    work_end_time: string;
    images: {
        id: number;
        image: string;
        created: string;
        modified: string;
        is_active: boolean;
        // Add other image properties as needed
    }[];
    is_active: boolean;
    className?: any;
}