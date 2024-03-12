import path from "path";
import { secrets } from "../secrets";

/**
 * Returns the route information for a given filename.
 */
export const getRouteInfo = (
  filename: string
): { routePath: string; apiPath: string; apiURL: string } => {
  // Extract the route name from the filename.
  const route = filename.split(".")[0];

  // Construct the route path by joining the current directory, the routes directory, and the filename.
  const routePath = path.join(__dirname, `../routes/${filename}`);

  // Construct the API path by concatenating the API version and the route.
  const apiPath = `${secrets.API_VERSION}/${route}`;

  // Construct the API URL by concatenating the localhost, the PORT, and the API path.
  const apiURL = `http://localhost:${secrets.PORT}/${apiPath}`;

  // Return the route information.
  return { routePath, apiPath, apiURL };
};

/**
 * This function takes an email address as input and validates it using a regular expression pattern.
 * The pattern is constructed to match a valid email address format. The function splits the
 * email address into local and domain parts, and then checks if the email address matches the
 * pattern, if the local part has at least one character, if the domain part has at least
 * two characters, and if any part of the domain has at least two characters.
 *
 */
export const validateEmail = (value: string): boolean => {
  // Regular expression pattern to match a valid email address.
  // The pattern requires the local part to start with one or more alphanumeric characters or special characters,
  // followed by an '@' symbol, and then the domain part which must consist of one or more alphanumeric
  // characters or hyphens, with at least one dot separating the top level domain.
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Split the email address into local and domain parts.
  // The local part refers to the part before the '@' symbol, and the domain part refers to the part after the '@' symbol.
  const emailParts = value.split("@");
  const [local, domain] = emailParts;

  // Check if the email address matches the pattern.
  // The pattern is tested against the entire email address.
  const isValidPattern = emailPattern.test(value);

  // Check if the local part has at least one character.
  const isValidLocal = local.length >= 1;

  // Check if the domain part has at least two characters.
  const isValidDomain = domain.length >= 2;

  // Check if any part of the domain has at least two characters.
  // The domain is split into individual parts (top level domains) using the dot as a separator.
  const isValidDomainParts = domain.split(".").some((part) => part.length >= 2);

  // Return the result of all the individual validations.
  // If any of the validations fail, the overall validation will fail.
  return isValidPattern && isValidLocal && isValidDomain && isValidDomainParts;
};
