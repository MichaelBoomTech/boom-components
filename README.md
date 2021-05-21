# Boom-components library provides separate react components

### Usage
1. If the library is not set in package.json, just do **"npm i git+https://github.com/NavasardianMichael/boom-components.git"**.
2. For installing the updated version of the library, just add this pair to **scripts** in **package.json**:

    **"update:bc": "npm install git+https://github.com/NavasardianMichael/boom-components.git"**

3. then run command **"npm run update:bc"** to install the fresh version of the library.
4. Import needed component separately, e.g.: **"import AddShareIcons from 'boom-components/dist/AddShareIcons'"**.
5. If some errors accured due to authentification, just run  **"npm audit fix"**.
6. Happy Hacking! ✌




### Publishing new version
1. After the changes you have done, change the version of global package.json.
2. Run **"npm run build"**.
3. Push the changes to boom-components repository.





### Importing Components

#### AddShareIcons


**Prop** | **Example** | **type**
---- | ---------- | ----
comp_id | 'comp-knoo8ma8' | string **(Required)**
instance | 'YBqfV6G8MmNwz...' | string **(Required)**
event | *event json* | object **(Required)**
boomEventUrlBase | 'https://calendar.boomte.ch/single/' | string **(Required)**
iconsSectionCustomClassNames | ['customClassName1'] | arrayOf(string)
showAddToIcons | true | bool
addToSectionTitle | 'Add to calendar' | string
addToIconsCustomClassNames | ['customClassName2', 'customClassName3' ] | arrayOf(string)
showShareIcons | true | bool
shareSectionTitle | 'Share Event' | string
shareIconsCustomClassNames | ['customClassName4', 'customClassName5' ]} | arrayOf(string)
copyActionTooltipText | 'Copy event url' | string
copiedTooltipText | 'Copied' | string
sequence | 'vertical' | oneOf(['vertical' 'horizontal'])



