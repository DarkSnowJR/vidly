import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize; // get the starting index of items on the given page
  return _(items).slice(startIndex).take(pageSize).value(); // convert items array into lodash wrapper, slice starting from startIndex, take pageSize items, convert lodash wrapper back to regular array
}
