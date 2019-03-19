/**
 * Inject a class dynamically
 * 
 * @param {element} Content
 */
export const ContentToInject = ({Content}) => <Content/>;

export const noop = () => {};

export const toArray = (value) => {
  if (!Array.isArray(value)) {
    value = [value];
  }
  return value;
};

export const asInt = (value) => parseInt(value, 10);