const CustomSelectIcon = props => (
  <svg
    style={{
      fill: 'none',
      stroke: 'black',
      marginRight: 7,
      top: 'calc(50% - .4em)',
    }}
    width="12"
    height="12"
    {...props}
  >
    <use href="/icons.svg#icon-arrow-select"></use>
  </svg>
);

export default CustomSelectIcon;
