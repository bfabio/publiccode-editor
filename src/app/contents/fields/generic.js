import categories from "../categories";
import scopes from "../scopes";
import licenses from "../licenses";
import langs from "../langs";
import countries from "../countries";

const developmentStatus_list = [
  "concept",
  "development",
  "beta",
  "stable",
  "obsolete"
];
const softwareType_list = [
  "standalone/backend",
  "standalone/desktop",
  "standalone/iot",
  "standalone/mobile",
  "standalone/web",
  "standalone/other",
  "addon",
  "library",
  "configurationFiles"
];

let versions = null;

const fields = async () => {
  if (!versions) {
    // console.log("get versions");
    try {
      //disabled get remote versions from repository
      // versions = await getReleases(versionsUrl);
      versions = ["development", "0.1"];
    } catch (e) {
      versions = ["development", "0.1"];
    }
  } else {
    versions = await Promise.resolve(versions);
  }

  /*
   * minLength and maxLength parameter to constraint string input size
   */
  return [
    {
      title: "name",
      label: "Name of the software",
      type: "string",
      description:
        "The short public name of the product. It should be the name most people usually refer to the software. In case software has both an internal “code” name and a commercial name, use the commercial name.",
      section: 0,
      required: true
    },
    {
      title: "releaseDate",
      label: "Release Date",
      type: "string",
      description:
        "The release date of the latest version. It is mandatory if the software has been released at least once and thus the version number is present.",
      section: 2,
      required: true,
      widget: "date"
    },
    {
      title: "url",
      label: "Repository URL",
      type: "string",
      description:
        "The unique identifier for this software. It must be the URL of the source code repository (e.g. git, svn) where the software is published. If the repository is available under multiple protocols, prefer HTTP/HTTPS URLs that don't require user authentication.",
      widget: "url",
      section: 1,
      required: true
    },
    {
      title: "applicationSuite",
      label: "Application Suite",
      type: "string",
      description:
        "The name of the “suite” the software belongs to.",
      section: 0
    },
    {
      type: "string",
      title: "landingURL",
      label: "Landing Page URL",
      description:
        "The landing page, useful if the Repository URL does not serve a human readable or browsable page, but only serves source code to a source control client. This page, ideally, is where your users will land when they will click a button labeled something like “Go to the application source code”. In case the product provides an automated graphical installer, this URL can point to a page which contains a reference to the source code but also offers the download of such an installer.",
      section: 1,
      widget: "url"
    },
    {
      title: "localisedName",
      label: "Localised Name",
      type: "string",
      description:
          "The short public name of the product in this specific language. It should be the name most people usually refer to the software. In case the software has both an internal “code” name and a commercial name, use the commercial name.",
      section: 0,
      group: "description"
    },
    {
      title: "genericName",
      label: "Generic Name",
      type: "string",
      description:
        "The specific category to which the software belongs. You can usually find the generic name in the presentation of the software, when you write: “Software xxx is a yyy” Notable examples include “Text Editor”, “Word Processor”, “Web Browser”, “Chat” and so on…",
      section: 0,
      maxLength: 35,
      required: true,
      group: "description"
    },
    {
      title: "shortDescription",
      label: "Short Description",
      type: "string",
      description:
        "The short description of the software. It should be a single line containing a single sentence",
      section: 4,
      maxLength: 150,
      group: "description",
      required: true
    },
    {
      title: "longDescription",
      label: "Long Description",
      type: "string",
      description:
        "The longer description of the software. It provides an overview of the capabilities of the software for a potential user. The audience is the users of the software, not developers. You can think of this text as the description of the software that would be in its website (if the software had one). This description can contain some basic markdown: *italic*, **bold**, bullet points and [links](#).",
      section: 4,
      group: "description",
      widget: "editor",
      required: true,
      minLength: 500,
      maxLength: 10000,
      cn: "block__item--full"
    },
    {
      title: "documentation",
      label: "Documentation",
      type: "string",
      description:
        "The reference to the user-level (not developer-level) documentation of the software. The value must be the URL to a hosted version of the documentation. It is suggested that the URL points to a hosted version of the documentation that is immediately readable through a common web browser in both desktop and mobile format. The documentation should be rendered in HTML and browsable like a website (with a navigation index, a search bar, etc.).",
      section: 1,
      group: "description",
      widget: 'url'
    },
    {
      title: "apiDocumentation",
      label: "API Documentation",
      section: 1,
      group: "description",
      type: "string",
      description:
        "The reference to the API documentation of the software. The value must be the URL to a hosted version of the documentation. It is suggested that the URL points to a hosted version of the documentation that is immediately readable through a common web browser. The documentation should be rendered in HTML and browsable like a website (with a navigation index, a search bar, etc.), and if there is a reference or test deployment, possibly offer an interactive interface (e.g. Swagger).",
      widget: 'url'
    },
    {
      title: "features",
      label: "Features",
      type: "array",
      description:
        "The list of software features, describing what capabilities the software allows to do. The audience for this text should be that of public decision makers who will be commissioning the software. The features should thus not target developers: instead of listing technical features referring to implementation details, prefer listing user-visible functionalities of the software. While it is mandatory, there is no mandatory minimum or maximum number of features that should be listed. The suggested number of features to list is between 5 and 20, depending on the software size and complexity. There is no need for exhaustiveness, as users can always read the documentation for additional information.",
      items: {
        type: "string",
        title: "feature",
        maxLength: 100,
      },
      section: 4,
      required: true,
      group: "description"
    },
    {
      title: "screenshots",
      label: "Screenshots",
      type: "array",
      description:
        "Screenshots of the software with the purpose of showing an overview on how it works. It can be a relative or absolute path",
      items: {
        type: "string",
        title: "screenshot"
      },
      section: 5,
      group: "description"
    },
    {
      title: "videos",
      label: "Videos",
      type: "array",
      description:
        "One or more URLs of videos showing how the software works. Like screenshots, videos should be used to give a quick overview on how the software looks like and how it works. Videos must be hosted on a video sharing website that supports the oEmbed standard; popular options are YouTube and Vimeo.",
      items: {
        type: "string",
        title: "video"
      },
      section: 5,
      group: "description"
    },
    {
      title: "awards",
      label: "Awards",
      type: "array",
      description: "The list of awards won by the software.",
      items: {
        type: "string",
        title: "award"
      },
      section: 3,
      group: "description"
    },
    {
      title: "isBasedOn",
      label: "Is Based On",
      type: "array",
      items: {
        type: "string",
        title: "isBasedOn"
      },
      description:
        "The URL of the original project, if this software is a variant or a fork of another software. If present, it identifies the fork as a software variant, descending from the specified repositories.",
      section: 2,
      widget: "url"
    },

    {
      type: "string",
      title: "softwareVersion",
      label: "Software Version",
      description:
        "The latest stable version number of the software. The version number is a string that is not meant to be interpreted and parsed but just displayed; parsers should not assume semantic versioning or any other specific version format.",
      section: 2
    },
    {
      type: "string",
      title: "logo",
      label: "Logo",
      description:
        "The logo of the software. Logos should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px of width. Acceptable formats: SVG, SVGZ, PNG",
      section: 5,
      fileExt: ['svg','svgz','png']
    },
    {
      type: "string",
      title: "monochromeLogo",
      label: "Logo Monochrome",
      description:
        "The monochromatic (black) logo. The logo should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px of width. Acceptable formats: SVG, SVGZ, PNG",
      section: 5,
      fileExt: ['svg','svgz','png']
    },
    {
      title: "developmentStatus",
      label: "Development Status",
      type: "string",
      enum: developmentStatus_list,
      section: 2,
      required: true,
      widget: "choice-expanded"
    },
    {
      title: "softwareType",
      label: "Software Type",
      type: "string",
      enum: softwareType_list,
      section: 2,
      required: true,
      widget: "choice-expanded"
    },
    {
      title: "roadmap",
      label: "Roadmap",
      type: "string",
      description: "The URL of the public roadmap of the software.",
      section: 1,
      widget: "url"
    },
    {
      type: "array",
      title: "platforms",
      label: "Platforms",
      description:
        "List of platforms the software runs under. It describes the platforms that users will use to access and operate the software, rather than the platform the software itself runs on. Use the predefined values if possible. If the software runs on a platform for which a predefined value is not available, a different value can be used. Values: web, windows, mac, linux, ios, android. Human readable values outside this list are allowed.",
      examples: ["android", "ios"],
      items: {
        type: "string",
        enum: ["web", "windows", "mac", "linux", "ios", "android"]
      },
      required: true,
      section: 2,
      widget: "tags"
    },
    {
      type: "array",
      title: "license",
      label: "License",
      description:
        "The license the software is distributed under. It must contain a valid SPDX expression, referring to one (or multiple) Free and Open Source license. Please refer to the SPDX documentation for further information.",
      section: 3,
      items: {
        type: "string",
        enum: licenses
      },
      group: "legal",
      required: true,
      widget: "combobox"
    },
    {
      type: "string",
      title: "mainCopyrightOwner",
      label: "Main Copyright Owner",
      description:
        "The entity owning the copyright on most of the code in the repository. Normally, this is the line that is reported with the copyright symbol at the top of most files in the repo.",
      section: 3,
      group: "legal"
    },
    {
      type: "string",
      title: "repoOwner",
      label: "Repository Owner",
      description:
        "The entity that owns this repository; this might or might not be the same entity who owns the copyright on the code itself. For instance, in case of a fork of the original software, the repoOwner is probably different from the Main Copyright Owner.",
      section: 3,
      group: "legal",
      required: false
    },
    {
      title: "authorsFile",
      label: "Authors File",
      type: "string",
      description:
        "Some Free and Open Source software identifies the copyright holders through a file that lists all the entities that own the copyright. This is common in projects strongly backed by a community with many external contributors and no clear single/main copyright owner. In such cases, this value can be used to refer to the authors file, using a path relative to the root of the repository.",
      section: 3,
      group: "legal"
    },
    {
      title: "categories",
      label: "Category",
      description:
        "The list of categories this software falls under.",
      type: "array",
      items: {
        type: "string",
        title: "category",
        enum: categories
      },
      section: 6,
      required: true,
      widget: "tags"
    },
    {
      title: "scope",
      label: "Scope",
      description:
        "Public software can be very specific in scope because there is a large set of tasks that are specific to each type of administration. For instance, many softwares that are used in schools are probably not useful in hospitals. If you want to explicitly mark some software as only useful to certain types of administrations, you should add them to this value. The list of allowed values is defined in pa-types.md, and can be country-specific. This list can evolve at any time, separately from the version of this specification.",
      type: "array",
      items: {
        type: "string",
        title: "scope",
        enum: scopes,
      },
      section: 6,
      group: "intendedAudience",
      widget: "tags"
    },
    {
      title: "countries",
      label: "Countries",
      type: "array",
      description:
        "List of countries this software explicitly claims compliance with (fe. their processes, technologies or laws). All countries are specified using lowercase ISO 3166-1 alpha-2 two-letter country codes.",
      items: {
        title: "item",
        type: "string",
        enum: countries
      },
      section: 6,
      group: "intendedAudience",
      widget: "tags"
    },
    {
      title: "unsupportedCountries",
      label: "Unsupported Countries",
      type: "array",
      description:
        "List of unsupported countries. This might be the case if there is a conflict between how the software is working and a specific law, process or technology. All countries are specified using lowercase ISO 3166-1 alpha-2 two-letter country codes.",
      items: {
        title: "item",
        type: "string",
        enum: countries
      },
      section: 6,
      group: "intendedAudience",
      widget: "tags"
    },
    {
      title: "usedBy",
      label: "Used By",
      description:
        "The list of the names of prominent public administrations (that will serve as testimonials) that are currently known to the software maintainer to be using this software. Parsers are encouraged to enhance this list also with other information that can obtain independently; for instance, a fork of a software, owned by an administration, could be used as a signal of usage of the software.",
      type: "array",
      items: {
        type: "string"
      },
      section: 3
    },

    {
      title: "inputTypes",
      label: "Input Types",
      description:
        "The list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output. In case the software does not support any input, you can skip this field or use application/x.empty.",
      type: "array",
      items: {
        type: "string"
      },
      section: 2
    },
    {
      title: "outputTypes",
      label: "Output Types",
      description:
        "The list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output. In case the software does not support any output, you can skip this field or use application/x.empty.",
      type: "array",
      items: {
        type: "string"
      },
      section: 2
    },
    {
      title: "localisationReady",
      label: "Localisation Ready",
      type: "boolean",
      description:
        "The software has infrastructure in place or is otherwise designed to be multilingual. It does not need to be available in more than one language.",
      section: 6,
      required: true,
      group: "localisation"
    },
    {
      title: "availableLanguages",
      label: "Available Languages",
      type: "array",
      description:
        "The list of languages the software is translated in.",
      items: {
        title: "item",
        type: "string",
        enum: langs
      },
      widget: "tags",
      section: 4,
      required: true,
      group: "localisation"
    },
    {
      title: "type",
      label: "Maintenance Type",
      type: "array",
      description:
        "How the software is currently maintained. 'internal' means that the software is internally maintained by the repository owner. 'contract' means that there is a commercial contract that binds an entity to the maintenance of the software; 'community' means that the software is currently maintained by one or more people that donate their time to the project; 'none' means that the software is not actively maintained.",
      items: {
        type: "string"
      },
      uniqueItems: true,
      required: true,
      requireChildrenIf: [
        {title: "maintenance_contacts", values: ["internal", "community"]},
        {title: "maintenance_contractors", values: ["contract"]}
      ],
      enum: ["internal", "contract", "community", "none"],
      widget: "choice-expanded",
      section: 7,
      group: "maintenance"
    },
    {
      title: "contacts",
      label: "Contacts",
      type: "array",
      description:
        "One or more contacts of technical people currently responsible for maintaining the software. All contacts need to be a natural person, not a company or an organisation. if somebody is acting as a representative of an institution, it must be listed within the affiliation of the contact. In case of a commercial agreement (or a chain of such agreements), specify the final entities actually contracted to deliver the maintenance. Do not specify the software owner unless it is technically involved with the maintenance of the product as well.",
      items: {
        title: "contact",
        label: "Contact",
        description:
          "An explicit affiliation for the technical contact. In case of multiple maintainers, this can be used to create a relation between each technical contact and each maintainer entity. It can contain for instance a company name, an association name, etc.",
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "name",
            label: "Name",
            description:
              "The full name of one of the technical contacts. It must be a real person; do NOT populate it with generic contact information, company departments, associations, etc."
          },
          email: {
            type: "string",
            title: "Email",
            label: "Email",
            widget: "email",
            description:
              "The e-mail address of the technical contact. It must be an email address of where the technical contact can be directly reached; do NOT populate it with mailing-lists or generic contact points like info@acme.inc. "
          },
          phone: {
            type: "string",
            widget: "phone",
            title: "phone",
            label: "Phone",
            description: "Phone number (with international prefix)"
          },
          affiliation: {
            type: "string",
            title: "affiliation",
            label: "Affiliation",
            description:
              "An explicit affiliation information for the technical contact. In case of multiple maintainers, this can be used to create a relation between each technical contact and each maintainer entity. It can contain for instance a company name, an association name, etc."
          }
        },
        required: ["name"]
      },
      section: 7,
      group: "maintenance",
      cn: "block__item--full",
      // required: true
    },
    {
      title: "contractors",
      label: "Contractors",
      type: "array",
      description:
        "The entity or entities, if any, that are currently contracted for maintaining the software. They can be companies, organizations, or other collective names.",
      items: {
        title: "contractor",
        label: "Contractor",
        description:
          "An explicit affiliation information for the technical contact. In case of multiple maintainers, this can be used to create a relation between each technical contact and each maintainer entity. It can contain for instance a company name, an association name, etc.",
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "name",
            label: "Name",
            description:
              "The name of the contractor, whether it's a company or a natural person."
          },
          until: {
            type: "string",
            title: "until",
            label: "Until",
            description:
              "The date when the maintenance is going to end. In case of community maintenance, the value should not be more than 2 years in the future, and thus will need to be regularly updated as the community continues working on the project.",
            widget: "date"
          },
          website: {
            type: "string",
            title: "website",
            label: "website",
            description:
              "The contractor's website. It can either point to the main institutional website, or to a more project-specific page or website.",
            widget: "url"
          }
        },
        required: ["name", "until"]
      },
      section: 7,
      group: "maintenance",
      cn: "block__item--full"
    },

    {
      title: "dependsOn",
      label: "Depends On",
      description:
        "This section provides an overview on the system-level dependencies required to install and use this software.",
      type: "array",
      items: {
        title: "dependency",
        label: "Dependency",
        description:
          "The dependency is a complex object. The properties are the following:",
        type: "object",
        properties: {
          type: {
            title: "type",
            label: "Type",
            type: "array",
            items: {
              type: "string"
            },
            enum: ["open", "proprietary", "hardware"],
            uniqueItems: true,
            widget: "choice-expanded"
          },
          name: {
            title: "name",
            label: "Name",
            type: "string",
            description:
              "The name of the dependency (e.g. MySQL, NFC Reader)"
          },
          versionMin: {
            type: "string",
            title: "versionMin",
            label: "Version Range Min",
            description: "The first compatible version"
          },
          versionMax: {
            type: "string",
            title: "versionMax",
            label: "Version Range Max",
            description: "The latest compatible version"
          },
          version: {
            type: "string",
            title: "version",
            label: "Exact Version",
            description:
              "The only major version for which the software is compatible. It assumes compatibility with all patches and bugfixes later applied to this version."
          },
          optional: {
            title: "optional",
            label: "Optional",
            type: "boolean",
            description: "Whether the dependency is optional or mandatory"
          }
        },
        required: ["name", "type"]
      },
      section: 7,
      cn: "block__item--full"
    }
  ];
};
export default fields;
