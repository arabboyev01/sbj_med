import { ComponentPropsWithoutRef } from "react";

export type SVGProps = ComponentPropsWithoutRef<"svg">;

export const LangIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_4_139)">
      <path
        d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.59998 9H20.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.59998 15H20.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 3C9.81538 5.69961 8.92224 8.81787 8.92224 12C8.92224 15.1821 9.81538 18.3004 11.5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 3C14.1847 5.69961 15.0778 8.81787 15.0778 12C15.0778 15.1821 14.1847 18.3004 12.5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4_139">
        <rect width="24" height="24" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const UserIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 6.93548C10.2871 6.93548 10.5677 6.85034 10.8065 6.69084C11.0452 6.53133 11.2313 6.30463 11.3411 6.03938C11.4509 5.77413 11.4797 5.48226 11.4237 5.20067C11.3677 4.91909 11.2294 4.66044 11.0265 4.45742C10.8234 4.25441 10.5647 4.11616 10.2831 4.06015C10.0017 4.00414 9.70974 4.03289 9.44449 4.14275C9.17924 4.25262 8.95254 4.43868 8.79303 4.6774C8.63352 4.91612 8.54839 5.19677 8.54839 5.48387C8.54839 5.86886 8.70133 6.23809 8.97355 6.51032C9.24578 6.78254 9.61501 6.93548 10 6.93548ZM14.4512 6.72903C10.5605 7.64758 9.44758 7.6496 5.54879 6.72903C5.38509 6.69698 5.21536 6.72957 5.07518 6.81997C4.935 6.91037 4.83527 7.05154 4.79693 7.21387C4.7586 7.37621 4.78462 7.54709 4.86953 7.69064C4.95446 7.83421 5.09169 7.9393 5.25242 7.98388C6.41009 8.25726 7.49072 8.49798 8.56452 8.62137C8.53024 12.6972 8.06774 13.5843 7.55645 14.8964C7.4864 15.0757 7.49047 15.2756 7.56775 15.4519C7.64504 15.6282 7.7892 15.7666 7.96855 15.8367C8.14789 15.9068 8.34772 15.9027 8.52406 15.8253C8.70041 15.7481 8.83882 15.6039 8.90887 15.4246C9.26048 14.5238 9.59799 13.7834 9.80645 12.2572H10.1967C10.4057 13.7859 10.7435 14.525 11.0944 15.4246C11.1644 15.6039 11.3028 15.7481 11.4791 15.8253C11.6555 15.9027 11.8554 15.9068 12.0347 15.8367C12.214 15.7666 12.3582 15.6282 12.4355 15.4519C12.5127 15.2756 12.5169 15.0757 12.4468 14.8964C11.9334 13.5831 11.4714 12.6947 11.4387 8.62137C12.5125 8.49798 13.5932 8.25847 14.7508 7.98388C14.9155 7.94498 15.0583 7.84296 15.1484 7.6998C15.2386 7.55662 15.269 7.38377 15.2328 7.21847C15.1968 7.05316 15.0972 6.90863 14.9557 6.81603C14.814 6.72343 14.6418 6.69016 14.4758 6.72339L14.4552 6.72823L14.4512 6.72903ZM10 0C4.47581 0 0 4.47581 0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10C20 4.47581 15.5242 0 10 0ZM10 17.7419C5.72581 17.7419 2.25806 14.2742 2.25806 10C2.25806 5.72581 5.72581 2.25806 10 2.25806C14.2742 2.25806 17.7419 5.72581 17.7419 10C17.7419 14.2742 14.2818 17.7396 10.0081 17.7419H10Z"
      fill="currentColor"
    />
  </svg>
);

export const MailIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2001_305)">
      <path
        d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7L12 13L21 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2001_305">
        <rect width="24" height="24" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const FaceBookIcon = (props: SVGProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.6" clipPath="url(#clip0_1_852)">
      <path
        d="M6.41663 9.16667V12.8333H9.16663V19.25H12.8333V12.8333H15.5833L16.5 9.16667H12.8333V7.33333C12.8333 7.09022 12.9299 6.85706 13.1018 6.68515C13.2737 6.51324 13.5068 6.41667 13.75 6.41667H16.5V2.75H13.75C12.5344 2.75 11.3686 3.23289 10.5091 4.09243C9.64951 4.95197 9.16663 6.11776 9.16663 7.33333V9.16667H6.41663Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_852">
        <rect width="22" height="22" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const TelegramIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.6" clipPath="url(#clip0_1_860)">
      <path
        d="M15 9.16699L11 12.8337L17 18.3337L21 3.66699L3 10.0837L7 11.917L9 17.417L12 13.7503"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_860">
        <rect width="24" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const InstagramIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.6" clipPath="url(#clip0_1_855)">
      <path
        d="M4 7.33366C4 6.3612 4.42143 5.42857 5.17157 4.74093C5.92172 4.0533 6.93913 3.66699 8 3.66699H16C17.0609 3.66699 18.0783 4.0533 18.8284 4.74093C19.5786 5.42857 20 6.3612 20 7.33366V14.667C20 15.6395 19.5786 16.5721 18.8284 17.2597C18.0783 17.9474 17.0609 18.3337 16 18.3337H8C6.93913 18.3337 5.92172 17.9474 5.17157 17.2597C4.42143 16.5721 4 15.6395 4 14.667V7.33366Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C9 11.7293 9.31607 12.4288 9.87868 12.9445C10.4413 13.4603 11.2044 13.75 12 13.75C12.7956 13.75 13.5587 13.4603 14.1213 12.9445C14.6839 12.4288 15 11.7293 15 11C15 10.2707 14.6839 9.57118 14.1213 9.05546C13.5587 8.53973 12.7956 8.25 12 8.25C11.2044 8.25 10.4413 8.53973 9.87868 9.05546C9.31607 9.57118 9 10.2707 9 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 6.875V6.885"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_855">
        <rect width="24" height="22" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const LinkedinIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.6" clipPath="url(#clip0_1_863)">
      <path
        d="M4 5.50033C4 5.0141 4.21071 4.54778 4.58579 4.20396C4.96086 3.86015 5.46957 3.66699 6 3.66699H18C18.5304 3.66699 19.0391 3.86015 19.4142 4.20396C19.7893 4.54778 20 5.0141 20 5.50033V16.5003C20 16.9866 19.7893 17.4529 19.4142 17.7967C19.0391 18.1405 18.5304 18.3337 18 18.3337H6C5.46957 18.3337 4.96086 18.1405 4.58579 17.7967C4.21071 17.4529 4 16.9866 4 16.5003V5.50033Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.083V14.6663"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7.33301V7.34301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.6663V10.083"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14.6663V11.9163C16 11.4301 15.7893 10.9638 15.4142 10.62C15.0391 10.2762 14.5304 10.083 14 10.083C13.4696 10.083 12.9609 10.2762 12.5858 10.62C12.2107 10.9638 12 11.4301 12 11.9163"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_863">
        <rect width="24" height="22" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const CloseIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_82_506)">
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_82_506">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const RightArrowIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 15L12.5 10L7.5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_17_692)">
      <path
        d="M6.86922 6.1166L1.55255 6.88744L1.45838 6.9066C1.31583 6.94445 1.18588 7.01944 1.08179 7.12394C0.977707 7.22843 0.903219 7.35868 0.865934 7.50137C0.82865 7.64407 0.829905 7.79411 0.869572 7.93616C0.909239 8.07822 0.985896 8.2072 1.09172 8.30994L4.94338 12.0591L4.03505 17.3549L4.02422 17.4466C4.01549 17.594 4.0461 17.7411 4.11292 17.8729C4.17974 18.0046 4.28037 18.1162 4.4045 18.1962C4.52862 18.2762 4.67179 18.3218 4.81934 18.3284C4.96689 18.3349 5.11352 18.3021 5.24422 18.2333L9.99922 15.7333L14.7434 18.2333L14.8267 18.2716C14.9643 18.3258 15.1138 18.3424 15.2598 18.3197C15.4059 18.2971 15.5434 18.236 15.658 18.1427C15.7727 18.0494 15.8605 17.9272 15.9124 17.7888C15.9643 17.6504 15.9785 17.5006 15.9534 17.3549L15.0442 12.0591L18.8975 8.3091L18.9625 8.23827C19.0554 8.12391 19.1163 7.98698 19.139 7.84143C19.1617 7.69588 19.1454 7.54692 19.0918 7.40971C19.0382 7.2725 18.9492 7.15196 18.8338 7.06036C18.7184 6.96876 18.5808 6.90938 18.435 6.88827L13.1184 6.1166L10.7417 1.29994C10.6729 1.16038 10.5665 1.04286 10.4344 0.960689C10.3023 0.878514 10.1498 0.834961 9.99422 0.834961C9.83864 0.834961 9.68616 0.878514 9.55406 0.960689C9.42195 1.04286 9.31549 1.16038 9.24672 1.29994L6.86922 6.1166Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_692">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HumburgerIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
      fill="currentColor"
    />
  </svg>
);

export const SearchIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_17_266)">
      <path
        d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_266">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HomeIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_73_1214)">
      <path
        d="M18.9998 8.71L13.6668 4.562C13.1988 4.19791 12.6227 4.00023 12.0298 4.00023C11.4368 4.00023 10.8608 4.19791 10.3928 4.562L5.05879 8.71C4.73823 8.95928 4.47888 9.27853 4.30054 9.64335C4.1222 10.0082 4.02959 10.4089 4.02979 10.815V18.015C4.02979 18.5454 4.2405 19.0541 4.61557 19.4292C4.99064 19.8043 5.49935 20.015 6.02979 20.015H18.0298C18.5602 20.015 19.0689 19.8043 19.444 19.4292C19.8191 19.0541 20.0298 18.5454 20.0298 18.015V10.815C20.0298 9.992 19.6498 9.215 18.9998 8.71Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_73_1214">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CalendarIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_17_855)">
      <path
        d="M3.33337 6.33317C3.33337 5.89114 3.50897 5.46722 3.82153 5.15466C4.13409 4.8421 4.55801 4.6665 5.00004 4.6665H15C15.4421 4.6665 15.866 4.8421 16.1786 5.15466C16.4911 5.46722 16.6667 5.89114 16.6667 6.33317V16.3332C16.6667 16.7752 16.4911 17.1991 16.1786 17.5117C15.866 17.8242 15.4421 17.9998 15 17.9998H5.00004C4.55801 17.9998 4.13409 17.8242 3.82153 17.5117C3.50897 17.1991 3.33337 16.7752 3.33337 16.3332V6.33317Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 3V6.33333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 3V6.33333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33337 9.6665H16.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16663 13H9.99996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13V15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_855">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const PhoneIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    />
  </svg>
);

export const UzFlagIcon = (props: SVGProps) => (
  <svg
    width="222"
    height="147"
    viewBox="0 0 222 147"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0.5 97.998H221.5V146.998H0.5V97.998Z" fill="#1EB53A" />
    <path d="M0.5 0H221.5V49H0.5V0Z" fill="#0099B5" />
    <path d="M0.5 47.0391H221.5V99.9591H0.5V47.0391Z" fill="#CE1126" />
    <path d="M0.5 49.9805H221.5V97.0205H0.5V49.9805Z" fill="white" />
    <path
      d="M43.8715 40.327C53.1765 40.327 60.7196 32.7839 60.7196 23.479C60.7196 14.174 53.1765 6.63086 43.8715 6.63086C34.5666 6.63086 27.0234 14.174 27.0234 23.479C27.0234 32.7839 34.5666 40.327 43.8715 40.327Z"
      fill="white"
    />
    <path
      d="M49.4848 40.327C58.7898 40.327 66.3329 32.7839 66.3329 23.479C66.3329 14.174 58.7898 6.63086 49.4848 6.63086C40.1799 6.63086 32.6367 14.174 32.6367 23.479C32.6367 32.7839 40.1799 40.327 49.4848 40.327Z"
      fill="#0099B5"
    />
    <path d="M80.9303 33.5918L79.8633 36.7929L81.4919 37.3545" fill="white" />
    <path d="M80.929 33.5918L81.9961 36.7929L80.3674 37.3545" fill="white" />
    <path d="M84.1205 35.9629L80.755 35.8411L80.7752 37.6179" fill="white" />
    <path d="M84.106 35.9414L81.4581 37.9329L80.383 36.484" fill="white" />
    <path d="M77.7572 35.9414L80.4052 37.9329L81.4803 36.484" fill="white" />
    <path d="M77.7428 35.9629L81.1083 35.8411L81.0881 37.6179" fill="white" />
    <path d="M82.9349 39.6988L81.8688 36.4764L80.2481 36.9474" fill="white" />
    <path d="M82.9245 39.7055L80.1735 37.701L81.1245 36.313" fill="white" />
    <path d="M78.9592 39.6723L81.6989 37.7441L80.681 36.313" fill="white" />
    <path d="M78.9665 39.6812L79.945 36.4687L81.6152 36.9979" fill="white" />
    <path d="M80.9303 20.1113L79.8633 23.3125L81.4919 23.8741" fill="white" />
    <path d="M80.929 20.1113L81.9961 23.3125L80.3674 23.8741" fill="white" />
    <path d="M84.1166 22.4825L80.7511 22.3606L80.7712 24.1375" fill="white" />
    <path d="M84.1021 22.4609L81.4542 24.4524L80.3791 23.0036" fill="white" />
    <path d="M77.7572 22.4609L80.4052 24.4524L81.4803 23.0036" fill="white" />
    <path d="M77.7428 22.4825L81.1083 22.3606L81.0881 24.1375" fill="white" />
    <path d="M82.9349 26.2183L81.8688 22.9959L80.2481 23.4669" fill="white" />
    <path d="M82.9245 26.225L80.1735 24.2205L81.1245 22.8326" fill="white" />
    <path d="M78.9592 26.1918L81.6989 24.2636L80.681 22.8326" fill="white" />
    <path d="M78.9665 26.2007L79.945 22.9882L81.6152 23.5174" fill="white" />
    <path d="M80.9303 6.63477L79.8633 9.8359L81.4919 10.3975" fill="white" />
    <path d="M80.929 6.63477L81.9961 9.8359L80.3674 10.3975" fill="white" />
    <path d="M84.1166 9.00591L80.7511 8.88406L80.7712 10.6609" fill="white" />
    <path d="M84.1021 8.98432L81.4542 10.9759L80.3791 9.52702" fill="white" />
    <path d="M77.7572 8.98432L80.4052 10.9759L81.4803 9.52702" fill="white" />
    <path d="M77.7428 9.00591L81.1083 8.88406L81.0881 10.6609" fill="white" />
    <path d="M82.9349 12.7418L81.8688 9.51936L80.2481 9.99033" fill="white" />
    <path d="M82.9245 12.7485L80.1735 10.744L81.1245 9.356" fill="white" />
    <path d="M78.9592 12.7153L81.6989 10.7871L80.681 9.35601" fill="white" />
    <path d="M78.9665 12.7242L79.945 9.51168L81.6152 10.0409" fill="white" />
    <path d="M94.4069 33.5918L93.3398 36.7929L94.9685 37.3545" fill="white" />
    <path d="M94.4056 33.5918L95.4727 36.7929L93.844 37.3545" fill="white" />
    <path d="M97.5971 35.9629L94.2316 35.8411L94.2517 37.6179" fill="white" />
    <path d="M97.5826 35.9414L94.9347 37.9329L93.8595 36.484" fill="white" />
    <path d="M91.2338 35.9414L93.8817 37.9329L94.9569 36.484" fill="white" />
    <path d="M91.2193 35.9629L94.5848 35.8411L94.5647 37.6179" fill="white" />
    <path d="M96.4114 39.6988L95.3453 36.4764L93.7246 36.9474" fill="white" />
    <path d="M96.4011 39.7074L93.65 37.703L94.6011 36.315" fill="white" />
    <path d="M92.4358 39.6743L95.1755 37.7461L94.1575 36.315" fill="white" />
    <path d="M92.4431 39.6832L93.4216 36.4707L95.0918 36.9999" fill="white" />
    <path d="M94.4069 20.1113L93.3398 23.3125L94.9685 23.8741" fill="white" />
    <path d="M94.4056 20.1113L95.4727 23.3125L93.844 23.8741" fill="white" />
    <path d="M97.5971 22.4825L94.2316 22.3606L94.2517 24.1375" fill="white" />
    <path d="M97.5826 22.4609L94.9347 24.4524L93.8595 23.0036" fill="white" />
    <path d="M91.2338 22.4609L93.8817 24.4524L94.9569 23.0036" fill="white" />
    <path d="M91.2193 22.4825L94.5848 22.3606L94.5647 24.1375" fill="white" />
    <path d="M96.4114 26.2183L95.3453 22.9959L93.7246 23.4669" fill="white" />
    <path d="M96.4011 26.225L93.65 24.2205L94.6011 22.8326" fill="white" />
    <path d="M92.4358 26.1918L95.1755 24.2636L94.1575 22.8326" fill="white" />
    <path d="M92.4431 26.1988L93.4216 22.9863L95.0918 23.5155" fill="white" />
    <path d="M94.4069 6.63477L93.3398 9.8359L94.9685 10.3975" fill="white" />
    <path d="M94.4056 6.63477L95.4727 9.8359L93.844 10.3975" fill="white" />
    <path d="M97.5971 9.00591L94.2316 8.88406L94.2517 10.6609" fill="white" />
    <path d="M97.5826 8.98432L94.9347 10.9759L93.8595 9.52702" fill="white" />
    <path d="M91.2299 8.98432L93.8778 10.9759L94.953 9.52702" fill="white" />
    <path d="M91.2154 9.00591L94.5809 8.88406L94.5608 10.6609" fill="white" />
    <path d="M96.4114 12.7418L95.3453 9.51936L93.7246 9.99033" fill="white" />
    <path d="M96.4011 12.7485L93.65 10.744L94.6011 9.356" fill="white" />
    <path d="M92.4358 12.7153L95.1755 10.7871L94.1575 9.35601" fill="white" />
    <path d="M92.4431 12.7242L93.4216 9.51168L95.0918 10.0409" fill="white" />
    <path d="M107.883 33.5918L106.816 36.7929L108.445 37.3545" fill="white" />
    <path d="M107.886 33.5918L108.953 36.7929L107.324 37.3545" fill="white" />
    <path d="M111.074 35.9629L107.708 35.8411L107.728 37.6179" fill="white" />
    <path d="M111.059 35.9414L108.411 37.9329L107.336 36.484" fill="white" />
    <path d="M104.706 35.9414L107.354 37.9329L108.43 36.484" fill="white" />
    <path d="M104.696 35.9629L108.061 35.8411L108.041 37.6179" fill="white" />
    <path d="M109.888 39.6988L108.822 36.4764L107.201 36.9474" fill="white" />
    <path d="M109.878 39.7055L107.127 37.701L108.078 36.313" fill="white" />
    <path d="M105.912 39.6743L108.652 37.7461L107.634 36.315" fill="white" />
    <path d="M105.92 39.6832L106.898 36.4707L108.568 36.9999" fill="white" />
    <path d="M107.883 20.1113L106.816 23.3125L108.445 23.8741" fill="white" />
    <path d="M107.886 20.1113L108.953 23.3125L107.324 23.8741" fill="white" />
    <path d="M111.074 22.4825L107.708 22.3606L107.728 24.1375" fill="white" />
    <path d="M111.059 22.4609L108.411 24.4524L107.336 23.0036" fill="white" />
    <path d="M104.71 22.4609L107.358 24.4524L108.433 23.0036" fill="white" />
    <path d="M104.696 22.4825L108.061 22.3606L108.041 24.1375" fill="white" />
    <path d="M109.888 26.2183L108.822 22.9959L107.201 23.4669" fill="white" />
    <path d="M109.878 26.225L107.127 24.2205L108.078 22.8326" fill="white" />
    <path d="M105.912 26.1918L108.652 24.2636L107.634 22.8326" fill="white" />
    <path d="M105.92 26.1988L106.898 22.9863L108.568 23.5155" fill="white" />
    <path d="M107.883 6.63477L106.816 9.8359L108.445 10.3975" fill="white" />
    <path d="M107.886 6.63477L108.953 9.8359L107.324 10.3975" fill="white" />
    <path d="M111.074 9.00591L107.708 8.88406L107.728 10.6609" fill="white" />
    <path d="M111.059 8.98432L108.411 10.9759L107.336 9.52702" fill="white" />
    <path d="M104.706 8.98432L107.354 10.9759L108.43 9.52702" fill="white" />
    <path d="M104.692 9.00591L108.057 8.88406L108.037 10.6609" fill="white" />
    <path d="M109.888 12.7418L108.822 9.51936L107.201 9.99033" fill="white" />
    <path d="M109.878 12.7504L107.127 10.7459L108.078 9.35796" fill="white" />
    <path d="M105.912 12.7172L108.652 10.789L107.634 9.35796" fill="white" />
    <path d="M105.92 12.7261L106.898 9.51363L108.568 10.0428" fill="white" />
    <path d="M53.9733 33.5938L52.9062 36.7949L54.5349 37.3565" fill="white" />
    <path d="M53.972 33.5938L55.0391 36.7949L53.4104 37.3565" fill="white" />
    <path d="M57.1635 35.9649L53.798 35.843L53.8181 37.6199" fill="white" />
    <path d="M57.149 35.9433L54.5011 37.9348L53.426 36.486" fill="white" />
    <path d="M50.7963 35.9433L53.4442 37.9348L54.5194 36.486" fill="white" />
    <path d="M50.7857 35.9649L54.1512 35.843L54.1311 37.6199" fill="white" />
    <path d="M55.9778 39.7008L54.9118 36.4783L53.291 36.9493" fill="white" />
    <path d="M55.9675 39.7094L53.2164 37.7049L54.1675 36.3169" fill="white" />
    <path d="M52.0022 39.6762L54.7419 37.748L53.7239 36.3169" fill="white" />
    <path d="M52.0095 39.6851L52.988 36.4726L54.6582 37.0018" fill="white" />
    <path d="M67.4499 33.5938L66.3828 36.7949L68.0115 37.3565" fill="white" />
    <path d="M67.4525 33.5938L68.5195 36.7949L66.8909 37.3565" fill="white" />
    <path d="M70.6361 35.9649L67.2706 35.843L67.2908 37.6199" fill="white" />
    <path d="M70.6217 35.9433L67.9738 37.9348L66.8986 36.486" fill="white" />
    <path d="M64.2729 35.9433L66.9208 37.9348L67.9959 36.486" fill="white" />
    <path d="M64.2623 35.9649L67.6278 35.843L67.6077 37.6199" fill="white" />
    <path d="M69.4544 39.7008L68.3883 36.4783L66.7676 36.9493" fill="white" />
    <path d="M69.444 39.7094L66.693 37.7049L67.6441 36.3169" fill="white" />
    <path d="M65.4788 39.6762L68.2184 37.748L67.2005 36.3169" fill="white" />
    <path d="M65.4861 39.6851L66.4645 36.4726L68.1348 37.0018" fill="white" />
    <path d="M67.4499 20.1172L66.3828 23.3183L68.0115 23.8799" fill="white" />
    <path d="M67.4525 20.1172L68.5195 23.3183L66.8909 23.8799" fill="white" />
    <path d="M70.6361 22.4883L67.2706 22.3665L67.2908 24.1433" fill="white" />
    <path d="M70.6217 22.4667L67.9738 24.4583L66.8986 23.0094" fill="white" />
    <path d="M64.2768 22.4667L66.9247 24.4583L67.9998 23.0094" fill="white" />
    <path d="M64.2623 22.4883L67.6278 22.3665L67.6077 24.1433" fill="white" />
    <path d="M69.4544 26.2242L68.3883 23.0018L66.7676 23.4728" fill="white" />
    <path d="M69.444 26.2309L66.693 24.2264L67.6441 22.8384" fill="white" />
    <path d="M65.4788 26.1996L68.2184 24.2714L67.2005 22.8404" fill="white" />
    <path d="M65.4861 26.2086L66.4645 22.9961L68.1348 23.5252" fill="white" />
  </svg>
);

export const RuFlagIcon = (props: SVGProps) => (
  <svg
    width="222"
    height="147"
    viewBox="0 0 222 147"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M221.5 0H0.5V73.5H221.5V0Z" fill="white" />
    <path d="M221.5 73.5H0.5V147H221.5V73.5Z" fill="#D52B1E" />
    <path d="M221.5 49H0.5V98H221.5V49Z" fill="#0039A6" />
  </svg>
);

export const EnFlagIcon = (props: SVGProps) => (
  <svg
    width="222"
    height="147"
    viewBox="0 0 222 147"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1105_11027"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="222"
      height="147"
    >
      <path d="M0.5 0V147H221.5V0H0.5Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1105_11027)">
      <path d="M0.5 0V147H221.5V0H0.5Z" fill="#012169" />
      <path
        d="M0.5 0L221.5 147L0.5 0ZM221.5 0L0.5 147L221.5 0Z"
        fill="#000008"
      />
      <path
        d="M0.5 0L221.5 147M221.5 0L0.5 147"
        stroke="white"
        stroke-width="22.1"
      />
      <mask
        id="mask1_1105_11027"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="222"
        height="147"
      >
        <path
          d="M111 73.5H221.5V147L111 73.5ZM111 73.5V147H0.5L111 73.5ZM111 73.5H0.5V0L111 73.5ZM111 73.5V0H221.5L111 73.5Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_1105_11027)">
        <path
          d="M0.5 0L221.5 147L0.5 0ZM221.5 0L0.5 147L221.5 0Z"
          fill="#000008"
        />
        <path
          d="M0.5 0L221.5 147M221.5 0L0.5 147"
          stroke="#C8102E"
          stroke-width="14.7333"
        />
      </g>
      <path d="M111 0V147V0ZM0.5 73.5H221.5H0.5Z" fill="#000008" />
      <path
        d="M111 0V147M0.5 73.5H221.5"
        stroke="white"
        stroke-width="36.8333"
      />
      <path d="M111 0V147V0ZM0.5 73.5H221.5H0.5Z" fill="#000008" />
      <path
        d="M111 0V147M0.5 73.5H221.5"
        stroke="#C8102E"
        stroke-width="22.1"
      />
    </g>
  </svg>
);

export const Icon = (props: SVGProps) => <></>;
