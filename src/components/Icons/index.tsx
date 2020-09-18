import React from "react";
interface IIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}
export const Heart: React.FC<IIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      fill={props.fill}
      viewBox="0 0 24 24"
    >
      <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
    </svg>
  );
};
export const Heartf: React.FC<IIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      fill={props.fill}
      viewBox="0 0 24 24"
    >
      <path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" />
    </svg>
  );
};
export const PrevArrow: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 490.661 490.661"
      enableBackground="new 0 0 490.661 490.661"
      xmlSpace="preserve"
      width={props.width}
      height={props.height}
      fill={props.fill}
    >
      <g>
        <g>
          <path
            d="M453.331,1.424c-3.307-1.899-7.381-1.899-10.688,0L37.309,236.091c-3.285,1.92-5.312,5.44-5.312,9.237
			s2.027,7.317,5.312,9.237l405.333,234.667c1.664,0.96,3.499,1.429,5.355,1.429c1.835,0,3.691-0.469,5.333-1.429
			c3.285-1.899,5.333-5.419,5.333-9.237V10.661C458.664,6.843,456.616,3.323,453.331,1.424z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export const NextArrow: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 490.661 490.661"
      enableBackground="new 0 0 490.661 490.661"
      xmlSpace="preserve"
      width={props.width}
      height={props.height}
      fill={props.fill}
    >
      <g>
        <g>
          <path
            d="M453.352,236.091L48.019,1.424c-3.285-1.899-7.36-1.899-10.688,0c-3.285,1.899-5.333,5.419-5.333,9.237v469.333
			c0,3.819,2.048,7.339,5.333,9.237c1.643,0.939,3.499,1.429,5.333,1.429c1.856,0,3.691-0.469,5.355-1.429l405.333-234.667
			c3.285-1.92,5.312-5.44,5.312-9.237S456.637,237.989,453.352,236.091z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const Failed: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
      width={props.width}
      height={props.height}
      fill={props.fill}
    >
      <ellipse fill="#E04F5F" cx="256" cy="256" rx="256" ry="255.832" />
      <g transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 77.26 32)">
        <rect
          x="3.98"
          y="-427.615"
          fill="#fff"
          width="55.992"
          height="285.672"
        />
        <rect
          x="-110.828"
          y="-312.815"
          fill="#fff"
          width="285.672"
          height="55.992"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const Success: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
      width={props.width}
      height={props.height}
      fill={props.fill}
    >
      <ellipse fill="#32BEA6" cx="256" cy="256" rx="256" ry="255.832" />
      <polygon
        fill="#FFFFFF"
        points="235.472,392.08 114.432,297.784 148.848,253.616 223.176,311.52 345.848,134.504 
	391.88,166.392 "
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const Line: React.FC<IIconProps> = (props) => {
  return (
    <svg
      enableBackground="new 0 0 24 24"
      width={props.width || "512"}
      height={props.height || "512"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 .5c-6.615 0-12 4.398-12 9.803 0 4.841 4.27 8.897 10.035 9.668.391.083.923.26 1.058.594.12.303.079.771.038 1.087l-.164 1.026c-.045.303-.24 1.193 1.049.649 1.291-.542 6.916-4.104 9.436-7.019 1.724-1.9 2.548-3.847 2.548-6.005 0-5.405-5.385-9.803-12-9.803zm-4.697 13.017h-2.386c-.345 0-.63-.287-.63-.633v-4.801c0-.347.285-.634.63-.634.348 0 .63.287.63.634v4.167h1.756c.348 0 .629.285.629.634 0 .346-.282.633-.629.633zm2.466-.633c0 .346-.282.633-.631.633-.345 0-.627-.287-.627-.633v-4.801c0-.347.282-.634.63-.634.346 0 .628.287.628.634zm5.741 0c0 .272-.174.513-.432.6-.064.021-.133.031-.199.031-.211 0-.391-.091-.51-.252l-2.443-3.338v2.958c0 .346-.279.633-.631.633-.346 0-.626-.287-.626-.633v-4.8c0-.272.173-.513.43-.599.06-.023.136-.033.194-.033.195 0 .375.105.495.256l2.462 3.351v-2.975c0-.347.282-.634.63-.634.345 0 .63.287.63.634zm3.855-3.035c.349 0 .63.287.63.635 0 .347-.281.634-.63.634h-1.755v1.132h1.755c.349 0 .63.285.63.634 0 .346-.281.633-.63.633h-2.386c-.345 0-.627-.287-.627-.633v-4.801c0-.347.282-.634.63-.634h2.386c.346 0 .627.287.627.634 0 .351-.281.634-.63.634h-1.755v1.132z"
        fill="#4caf50"
      />
    </svg>
  );
};
export const Reload: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width={props.width}
      height={props.height}
      fill={props.fill}
      viewBox="0 0 460.893 460.893"
      enableBackground="new 0 0 460.893 460.893"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M236.823,68.312V8.579c0.032-3.455-2.023-6.589-5.205-7.936c-3.235-1.332-6.956-0.554-9.387,1.963l-93.867,93.867
            c-3.309,3.328-3.309,8.704,0,12.032l93.867,93.867c1.614,1.628,3.816,2.537,6.108,2.524c4.713-0.027,8.511-3.87,8.484-8.583
            v-59.733c67.121,4.485,119.316,60.16,119.466,127.43c0.157,70.692-57.023,128.127-127.715,128.284
            c-70.692,0.157-128.127-57.023-128.284-127.715c0-4.713-3.82-8.533-8.533-8.533h-51.2c-4.713,0-8.533,3.82-8.533,8.533
            c0,108.395,87.872,196.267,196.267,196.267c108.395,2.356,198.177-83.605,200.533-192
            C431.179,160.45,345.218,70.669,236.823,68.312z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export const WeatherIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      viewBox="0 -32 512 512"
      width={props.width || "512pt"}
      height={props.height || "512pt"}
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m62.640625 137.230469c2.804687-46.371094 41.292969-83.113281 88.371094-83.113281 37.964843 0 70.347656 23.902343 82.929687 57.476562 32.695313.394531 59.082032 27.003906 59.082032 59.792969 0 33.035156-26.78125 59.816406-59.816407 59.816406-13.828125 0-154.71875 0-168.925781 0-25.960938 0-47.007812-21.046875-47.007812-47.007813 0-25.410156 20.167968-46.097656 45.367187-46.964843zm0 0"
        fill="#f0f5f7"
      />
      <path
        d="m293.023438 171.390625c0 23.898437-14.027344 44.53125-34.292969 54.105469 3.652343-7.738282 5.699219-16.390625 5.699219-25.519532 0-32.789062-26.382813-59.402343-59.078126-59.792968-12.585937-33.578125-44.964843-57.476563-82.933593-57.476563-17.121094 0-33.109375 4.859375-46.65625 13.28125 15.625-25.136719 43.480469-41.867187 75.25-41.867187 37.960937 0 70.347656 23.898437 82.925781 57.46875 32.699219.398437 59.085938 27.011718 59.085938 59.800781zm0 0"
        fill="#dde9ed"
      />
      <path
        d="m460.949219 249.117188c-3.160157-52.179688-46.46875-93.523438-99.445313-93.523438-42.722656 0-79.160156 26.894531-93.320312 64.671875-36.792969.445313-66.484375 30.390625-66.484375 67.289063 0 37.175781 30.136719 67.308593 67.308593 67.308593h190.09375c29.214844 0 52.894532-23.683593 52.894532-52.894531 0-28.597656-22.691406-51.875-51.046875-52.851562zm0 0"
        fill="#c4e1e8"
      />
      <path
        d="m512 301.964844c0 29.214844-23.6875 52.902344-52.902344 52.902344h-4.097656c3.835938-7.324219 6.007812-15.660157 6.007812-24.496094 0-28.59375-22.691406-51.875-51.050781-52.855469-3.15625-52.175781-46.472656-93.523437-99.445312-93.523437-7.144531 0-14.109375.75-20.820313 2.179687 18.121094-18.847656 43.59375-30.578125 71.8125-30.578125 52.976563 0 96.289063 41.339844 99.445313 93.527344 28.359375.96875 51.050781 24.25 51.050781 52.84375zm0 0"
        fill="#a4d5dd"
      />
      <path
        d="m428.652344 193.21875c0 65.496094-53.09375 118.589844-118.589844 118.589844-65.5 0-118.59375-53.09375-118.59375-118.589844 0-65.5 53.09375-118.59375 118.59375-118.59375 65.496094 0 118.589844 53.09375 118.589844 118.59375zm0 0"
        fill="#f6cb43"
      />
      <path
        d="m310.066406 311.808594c-65.5 0-118.59375-53.09375-118.59375-118.59375 0-57.445313 40.84375-105.359375 95.082032-116.253906-1.535157 7.601562-2.335938 15.457031-2.335938 23.511718 0 65.5 53.089844 118.589844 118.589844 118.589844 8.054687 0 15.910156-.800781 23.511718-2.332031-10.910156 54.234375-58.820312 95.078125-116.253906 95.078125zm0 0"
        fill="#fab03c"
      />
      <g fill="#f8e98e">
        <path d="m495.550781 200.945312h-25.542969c-4.265624 0-7.726562-3.460937-7.726562-7.726562 0-4.269531 3.460938-7.726562 7.726562-7.726562h25.542969c4.269531 0 7.726563 3.457031 7.726563 7.726562 0 4.265625-3.457032 7.726562-7.726563 7.726562zm0 0" />
        <path d="m448.585938 120.972656c-2.667969 0-5.265626-1.386718-6.695313-3.867187-2.136719-3.695313-.871094-8.421875 2.828125-10.554688l22.121094-12.769531c3.695312-2.132812 8.417968-.871094 10.550781 2.828125 2.136719 3.695313.871094 8.417969-2.828125 10.550781l-22.121094 12.773438c-1.214844.703125-2.542968 1.039062-3.855468 1.039062zm0 0" />
        <path d="m390.027344 62.425781c-1.308594 0-2.636719-.332031-3.855469-1.035156-3.695313-2.136719-4.960937-6.859375-2.828125-10.554687l12.773438-22.121094c2.132812-3.695313 6.855468-4.964844 10.554687-2.828125 3.695313 2.132812 4.960937 6.859375 2.824219 10.554687l-12.769532 22.121094c-1.429687 2.476562-4.027343 3.863281-6.699218 3.863281zm0 0" />
        <path d="m310.0625 40.996094c-4.269531 0-7.726562-3.460938-7.726562-7.726563v-25.542969c0-4.265624 3.457031-7.726562 7.726562-7.726562 4.265625 0 7.722656 3.460938 7.722656 7.726562v25.542969c.003906 4.265625-3.457031 7.726563-7.722656 7.726563zm0 0" />
        <path d="m230.09375 62.425781c-2.667969 0-5.265625-1.386719-6.695312-3.863281l-12.773438-22.121094c-2.132812-3.695312-.867188-8.421875 2.828125-10.554687 3.695313-2.132813 8.421875-.867188 10.554687 2.828125l12.769532 22.121094c2.136718 3.695312.871094 8.421874-2.828125 10.554687-1.214844.703125-2.542969 1.035156-3.855469 1.035156zm0 0" />
      </g>
      <path
        d="m259.25 249.117188c-3.160156-52.179688-46.46875-93.523438-99.445312-93.523438-42.722657 0-79.160157 26.894531-93.320313 64.671875-36.792969.445313-66.484375 30.390625-66.484375 67.289063 0 37.171874 30.136719 67.308593 67.308594 67.308593h190.09375c29.214844 0 52.898437-23.683593 52.898437-52.898437-.003906-28.59375-22.695312-51.871094-51.050781-52.847656zm0 0"
        fill="#c4e1e8"
      />
      <path
        d="m310.300781 301.964844c0 29.214844-23.6875 52.902344-52.902343 52.902344h-4.097657c3.835938-7.324219 6.007813-15.660157 6.007813-24.496094 0-28.59375-22.691406-51.875-51.050782-52.855469-3.15625-52.175781-46.472656-93.523437-99.445312-93.523437-7.144531 0-14.109375.75-20.820312 2.179687 18.121093-18.847656 43.59375-30.578125 71.8125-30.578125 52.976562 0 96.289062 41.339844 99.449218 93.527344 28.355469.96875 51.046875 24.25 51.046875 52.84375zm0 0"
        fill="#a4d5dd"
      />
      <path
        d="m418.566406 342.792969c-3.15625-52.179688-46.46875-93.523438-99.441406-93.523438-42.726562 0-79.164062 26.894531-93.324219 64.671875-36.789062.445313-66.480469 30.394532-66.480469 67.289063 0 37.175781 30.132813 67.308593 67.308594 67.308593h190.09375c29.210938 0 52.894532-23.683593 52.894532-52.894531 0-28.597656-22.691407-51.875-51.050782-52.851562zm0 0"
        fill="#f0f5f7"
      />
      <path
        d="m469.621094 395.640625c0 29.214844-23.6875 52.902344-52.902344 52.902344h-4.097656c3.835937-7.324219 6.007812-15.660157 6.007812-24.496094 0-28.59375-22.691406-51.875-51.050781-52.855469-3.15625-52.175781-46.472656-93.523437-99.449219-93.523437-7.144531 0-14.109375.75-20.820312 2.179687 18.125-18.84375 43.597656-30.578125 71.816406-30.578125 52.976562 0 96.289062 41.339844 99.445312 93.527344 28.359376.96875 51.050782 24.25 51.050782 52.84375zm0 0"
        fill="#dde9ed"
      />
      <path
        d="m392.191406 336.9375c-3.488281 0-6.652344-2.382812-7.503906-5.921875-.894531-3.71875-2.117188-7.386719-3.636719-10.898437-1.695312-3.917969.105469-8.464844 4.023438-10.160157 3.917969-1.695312 8.464843.109375 10.160156 4.023438 1.871094 4.328125 3.375 8.84375 4.476563 13.421875 1 4.152344-1.558594 8.320312-5.707032 9.320312-.605468.144532-1.214844.214844-1.8125.214844zm0 0"
        fill="#f0f5f7"
      />
      <path
        d="m373.371094 302.578125c-2.03125 0-4.058594-.796875-5.574219-2.378906-12.867187-13.40625-30.152344-20.789063-48.671875-20.789063-4.265625 0-7.726562-3.457031-7.726562-7.726562 0-4.265625 3.460937-7.722656 7.726562-7.722656 22.765625 0 44.011719 9.070312 59.820312 25.542968 2.953126 3.074219 2.855469 7.96875-.222656 10.921875-1.5 1.4375-3.425781 2.152344-5.351562 2.152344zm0 0"
        fill="#f0f5f7"
      />
      <path
        d="m78.875 372.9375c2.257812-37.304688 33.222656-66.859375 71.09375-66.859375 30.546875 0 56.59375 19.226563 66.71875 46.234375 26.304688.320312 47.53125 21.726562 47.53125 48.105469 0 26.578125-21.542969 48.121093-48.121094 48.121093-11.125 0-124.46875 0-135.902344 0-20.882812 0-37.816406-16.929687-37.816406-37.816406 0-20.441406 16.222656-37.085937 36.496094-37.785156zm0 0"
        fill="#f0f5f7"
      />
      <path
        d="m264.21875 400.421875c0 26.347656-21.1875 47.75-47.457031 48.109375 7.875-8.574219 12.679687-19.996094 12.679687-32.542969 0-26.375-21.222656-47.785156-47.535156-48.105469-10.121094-27.003906-36.167969-46.238281-66.71875-46.238281-3.609375 0-7.152344.273438-10.621094.792969 12.324219-10.21875 28.144532-16.355469 45.402344-16.355469 30.546875 0 56.59375 19.222657 66.714844 46.234375 26.3125.320313 47.535156 21.722656 47.535156 48.105469zm0 0"
        fill="#dde9ed"
      />
    </svg>
  );
};
export const Air: React.FC<IIconProps> = (props) => {
  return (
    <svg
      id="Layer_1"
      enableBackground="new 0 0 512.013 512.013"
      viewBox="0 0 512.013 512.013"
      width={props.width || "512"}
      height={props.height || "512"}
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="256.007"
        x2="256.007"
        y1="0"
        y2="512.013"
      >
        <stop offset="0" stopColor="#2af598" />
        <stop offset="1" stopColor="#009efd" />
      </linearGradient>
      <path
        d="m472.008 140.945c0-41.775-13.089-81.153-37.852-113.877l31.896-24.137c30.064 39.729 45.955 87.454 45.955 138.014zm-3.221 109.803c57.535 57.537 57.535 151.154 0 208.69-33.86 33.86-78.88 52.527-126.765 52.562-13.845.011-58.054.014-110.273.014-100.124-.001-229.764-.014-231.743-.014l.004-40c3.011 0 301.612.031 341.983-.001 37.212-.026 72.196-14.532 98.509-40.846 41.939-41.939 41.939-110.182 0-152.122-31.898-31.899-83.804-31.899-115.702.001-24.467 24.466-25.189 65.083-1.577 88.694 17.803 17.805 45.696 17.803 63.499 0 4.054-4.053 6.286-9.18 6.286-14.435s-2.232-10.382-6.286-14.435c-2.486-2.487-5.794-3.857-9.312-3.857s-6.825 1.37-9.312 3.857l-28.285-28.285c20.732-20.73 54.461-20.73 75.193 0 23.954 23.955 23.954 61.484 0 85.438-16.114 16.116-37.434 24.991-60.035 24.991-22.6 0-43.92-8.874-60.034-24.988-7.325-7.325-13.348-15.63-17.975-24.646-2.879 3.462-5.931 6.827-9.176 10.072-33.86 33.86-78.88 52.527-126.765 52.562h-141.013v-40l141-.001c37.197-.026 72.182-14.532 98.494-40.846 41.94-41.94 41.94-110.182 0-152.121-15.497-15.497-36.043-24.032-57.851-24.032-21.81 0-42.354 8.535-57.852 24.033-24.467 24.466-25.188 65.084-1.577 88.696 17.804 17.804 45.696 17.803 63.5-.001 8.363-8.364 8.363-20.507-.001-28.871-5.133-5.135-13.488-5.134-18.623 0l-28.285-28.284c20.732-20.73 54.461-20.73 75.193 0 23.954 23.955 23.954 61.484 0 85.439-16.114 16.114-37.434 24.988-60.034 24.988-22.601 0-43.921-8.874-60.034-24.987-19.204-19.204-29.495-45.131-28.979-73.003.507-27.402 11.358-53.065 30.556-72.261 23.052-23.053 53.643-35.749 86.136-35.749 2.299 0 4.586.071 6.864.197-10.505-34.742-2.059-74.039 25.35-101.448 23.054-23.053 54.114-35.749 87.461-35.749 33.348 0 64.408 12.696 87.461 35.749 27.871 27.872 43.221 65.231 43.221 105.197 0 27.8-7.435 54.334-21.336 77.296 21.805 5.127 41.84 16.231 58.115 32.506zm-107.279-33.922c19.675-20.205 30.5-47.09 30.5-75.881 0-29.281-11.189-56.596-31.506-76.913-15.497-15.497-36.513-24.032-59.176-24.032-22.662 0-43.679 8.535-59.177 24.033-24.033 24.034-24.033 63.141.001 87.175 17.838 17.837 45.784 17.838 63.624 0 8.367-8.368 8.367-21.983-.001-30.351-5.133-5.134-13.488-5.133-18.623 0l-28.285-28.284c20.732-20.73 54.461-20.73 75.193 0 23.963 23.964 23.963 62.956 0 86.919-12.011 12.011-26.929 19.992-43.121 23.282 7.162 12.292 12.403 25.402 15.717 38.895 16.02-12.849 34.792-21.338 54.854-24.843zm-217.134-115.512c1.164-26.642 9.745-53.045 25.873-75.723l-32.598-23.182c-24.119 33.914-35.106 74.323-33.158 114.143 12.552-6.839 25.943-11.957 39.883-15.238z"
        fill="url(#SVGID_1_)"
      />
    </svg>
  );
};
export const Rain: React.FC<IIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 2 98 98"
      enableBackground="new 0 2 98 98"
      xmlSpace="preserve"
      width={props.width || "512"}
      height={props.height || "512"}
      fill={props.fill}
    >
      <g>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="49"
          y1="94.75"
          x2="49"
          y2="16.3404"
          gradientTransform="matrix(1 0 0 -1 0 104)"
        >
          <stop offset="0" stopColor="#00EFD1" />
          <stop offset="1" stopColor="#00ACEA" />
        </linearGradient>
        <path
          className="st0"
          d="M77.8,46.7c0-0.1-0.1-0.2-0.2-0.2L51.4,9.8C50.9,9,50,8.5,49,8.5S47.1,9,46.6,9.8L20.4,46.5   c-0.1,0.1-0.1,0.2-0.2,0.2c-5.4,9.3-5.3,20.6,0.2,30.1c6,10.3,16.9,16.7,28.6,16.7s22.6-6.4,28.6-16.7C83.1,67.2,83.2,56,77.8,46.7   z M72.4,73.8C67.5,82.3,58.6,87.5,49,87.5s-18.5-5.2-23.4-13.7c-4.5-7.8-4.6-16.5-0.3-24L49,16.7l23.7,33.2   C77,57.3,76.8,66.1,72.4,73.8z"
        />

        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="56.75"
          y1="94.75"
          x2="56.75"
          y2="16.3404"
          gradientTransform="matrix(1 0 0 -1 0 104)"
        >
          <stop offset="0" stopColor="#00EFD1" />
          <stop offset="1" stopColor="#00ACEA" />
        </linearGradient>
        <path
          className="st1"
          d="M64.7,57.9c-1.7,0-3,1.3-3,3c0,7.1-5.8,12.9-12.9,12.9c-1.7,0-3,1.3-3,3s1.3,3,3,3c10.4,0,18.9-8.5,18.9-18.9   C67.7,59.2,66.4,57.9,64.7,57.9z"
        />
      </g>
    </svg>
  );
};
export const Fold: React.FC<IIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 12 12"
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#111419"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M0 6L12 6"
      />
    </svg>
  );
};
export const Unfold: React.FC<IIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 12 12"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#111419"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M0 6L12 6M6 0L6 12" />
      </g>
    </svg>
  );
};
export const Git: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 140"
    >
      <path
        fill={props.fill || "#f05133"}
        d="M111.78,51.977,62.035,2.2381c-2.8622-2.8648-7.5082-2.8648-10.374,0l-10.329,10.33,13.102,13.102c3.0459-1.0284,6.5371-0.33888,8.9639,2.0884,2.4394,2.4424,3.124,5.9634,2.0698,9.0195l12.628,12.628c3.0551-1.0528,6.58-0.37262,9.0195,2.0712,3.4106,3.4096,3.4106,8.9345,0,12.345-3.4111,3.4116-8.936,3.4116-12.349,0-2.5645-2.5665-3.1988-6.3345-1.8999-9.4942l-11.777-11.777-0.001,30.991c0.8315,0.41162,1.6162,0.961,2.3091,1.6509,3.4096,3.4092,3.4096,8.9331,0,12.348-3.4106,3.4091-8.938,3.4091-12.345,0-3.4101-3.4146-3.4101-8.9385,0-12.348,0.84275-0.84125,1.8179-1.478,2.8584-1.9048v-31.279c-1.041-0.425-2.015-1.057-2.859-1.905-2.583-2.581-3.2051-6.372-1.8804-9.5439l-12.916-12.918-34.106,34.105c-2.8657,2.867-2.8657,7.513,0,10.378l49.742,49.739c2.8638,2.8648,7.5082,2.8648,10.376,0l49.512-49.504c2.8648-2.8662,2.8648-7.5136,0-10.379"
      />
    </svg>
  );
};
export const Coding: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width || "424pt"}
      height={props.height || "424pt"}
      fill={props.fill}
      viewBox="0 0 404 444"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0" />
      <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0" />
      <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0" />
      <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0" />
      <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0" />
      <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0" />
      <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0" />
      <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0" />
    </svg>
  );
};
export const ReactIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      version="1.1"
      id="Layer_2_1_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 645 690"
      enableBackground="new 0 0 841.9 595.3"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill={props.fill || "#61DAFB"}
          d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
          c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
          c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6
          c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11
          c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6
          c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4
          c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6
          c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5
          c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2
          c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8
          c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9
          c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3
          c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z
           M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z
           M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z
           M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z
           M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z
           M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
          c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7
          c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
          C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
          c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1
          c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
          C644,312.2,621.1,332.1,585.7,347.1z"
        />
        <polygon
          fill={props.fill || "#61DAFB"}
          points="320.8,78.4 320.8,78.4 320.8,78.4 	"
        />
        <circle fill={props.fill || "#61DAFB"} cx="420.9" cy="296.5" r="45.7" />
        <polygon
          fill={props.fill || "#61DAFB"}
          points="520.5,78.1 520.5,78.1 520.5,78.1 	"
        />
      </g>
    </svg>
  );
};
export const Cursor: React.FC<IIconProps> = (props) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width={props.width || "866.929px"}
      height={props.height || "866.93px"}
      fill={props.fill}
      viewBox="0 0 866.929 866.93"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M144.465,450.93c7.8,46.7,58.9,155.399,159.8,257.5v55.3h362.401v-55v-0.3l36.6-61.5c13.101-21.9,20-47,20-72.5v-187.7
          c-0.3-16.3-19.199-32.6-45-37.6c-20.5-4-39.6,0.199-49.8,9.6c-0.3-16.3-19.1-32.6-44.899-37.7c-18.5-3.7-36-0.6-46.7,7
          c-3.2-15-21.9-29.2-46.601-34.1c-21.3-4.2-41.199-0.2-51.8,9.1h-0.1c0,0,0,0,0-0.1c-0.5-4.9-27.901-270.3-28-270.7
          c-5.101-46.8-81.2-40.7-81.101,5.8l-0.199,436.5c0,5.2-3.801,9.5-8.9,10.2c-0.1,0-0.1,0-0.2,0c-0.6,0.1-1.1,0.1-1.7,0.1
          c-14.699-0.399-47.8-0.899-80.1-47.6c-4.3-6.2-8.2-11.8-11.7-16.9C195.865,376.229,136.065,400.63,144.465,450.93z"
        />
        <path d="M304.465,846.93c0,11,9,20,20,20h322.5c11,0,20-9,20-20v-51.101h-362.5V846.93z" />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const MenuBtn: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path d="M467,61H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,81.19,491.81,61,467,61z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M467,211H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,231.19,491.81,211,467,211z
              "
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M467,361H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,381.19,491.81,361,467,361z
              "
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M45,61C20.18,61,0,81.19,0,106c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,81.19,69.81,61,45,61z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M45,211c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,231.19,69.81,211,45,211z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M45,361c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,381.19,69.81,361,45,361z" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const CloseBtn: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 384 384"
      enableBackground="new 0 0 384 384"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M368,176c-8.832,0-16,7.168-16,16c0,88.224-71.776,160-160,160S32,280.224,32,192S103.776,32,192,32
              c42.952,0,83.272,16.784,113.536,47.264c6.224,6.264,16.36,6.304,22.624,0.08c6.272-6.224,6.304-16.36,0.08-22.632
              C291.928,20.144,243.536,0,192,0C86.128,0,0,86.128,0,192s86.128,192,192,192c105.864,0,192-86.128,192-192
              C384,183.168,376.832,176,368,176z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M214.624,192l36.688-36.688c6.248-6.248,6.248-16.376,0-22.624s-16.376-6.248-22.624,0L192,169.376l-36.688-36.688
              c-6.24-6.248-16.384-6.248-22.624,0c-6.248,6.248-6.248,16.376,0,22.624L169.376,192l-36.688,36.688
              c-6.248,6.248-6.248,16.376,0,22.624C135.808,254.44,139.904,256,144,256s8.192-1.56,11.312-4.688L192,214.624l36.688,36.688
              C231.816,254.44,235.904,256,240,256s8.184-1.56,11.312-4.688c6.248-6.248,6.248-16.376,0-22.624L214.624,192z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const ArrowUp: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 490.667 490.667"
      enableBackground="new 0 0 490.667 490.667"
      xmlSpace="preserve"
    >
      <path
        d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
      s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"
      />
      <path
        d="M252.885,66.944c-4.234-3.996-10.849-3.996-15.083,0L88.469,216.448
      c-4.171,4.16-4.179,10.914-0.019,15.085c2.001,2.006,4.717,3.133,7.55,3.134h74.667v159.829c0,5.891,4.776,10.667,10.667,10.667h128
      c5.891,0,10.667-4.776,10.667-10.667V234.667h74.667c5.891,0.011,10.675-4.757,10.686-10.648c0.005-2.84-1.123-5.565-3.134-7.571
      L252.885,66.944z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const CellPhone: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill || "#fff"}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 300 300"
      enableBackground="new 0 0 300 300"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <circle cx="150.001" cy="226.085" r="11.718" />
            <path
              d="M182.691,68.248h-65.382c-3.665,0-6.647,2.843-6.647,6.331v123.592c0,3.491,2.98,6.331,6.647,6.331h65.382
                  c3.665,0,6.647-2.843,6.647-6.331V74.579C189.336,71.088,186.356,68.248,182.691,68.248z"
            />
            <path
              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003
                  S232.835,0,149.996,0z M208.354,224.021c0,11.458-9.29,20.749-20.749,20.749h-75.214c-11.458,0-20.749-9.29-20.749-20.749V75.323
                  c0-11.458,9.29-20.749,20.749-20.749h75.214c11.458,0,20.749,9.29,20.749,20.749V224.021z"
            />
          </g>
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
export const Mail: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill || "#fff"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 216 216"
      xmlSpace="preserve"
    >
      <path
        d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
              L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
              l49.374-39.276V156z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
