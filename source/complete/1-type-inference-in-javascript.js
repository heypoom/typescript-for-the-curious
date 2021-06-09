// If we want a function that actually
// takes a list of file, we can type it with JSDoc comments:

/**
 * @param {File[]} files
 * @returns {Promise<void>}
 */
async function uploadFiles(files) {
  for (const file of files) {
    console.log(file.name, file.size)
  }
}

// Wait, how does VSCode auto-suggest the available methods for files and file?
// It's using the TypeScript compiler to infer the type!

// Since JavaScript is a subset of TypeScript,
// and TypeScript is a superset of JavaScript,
// You're already writing TypeScript, albeit a smaller subset of it!

// TypeScript is mostly JavaScript with a really good type system,
// (along with minor additional features like Enums.)

// Try to hover over this variable.
const hello = {
  nickname: 'Poom',
  age: 19,
  email: 'poom@hey.com',
}

// Note that even if autocomplete works, it does not check for type errors.
