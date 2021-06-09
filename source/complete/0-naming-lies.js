// Imagine you have a function called addFile.
// What does it do?
addFiles()

// From the name, one would expect it to add multiple files?

// Okay, let's try to add a new file! Easy as pie.
const file = new File([], 'photo.png')
addFiles([file])

// Wait. You found an error. Hmm, that's weird.

// Let's take a look at the function signature...
// Looking at the parameter name, it accepts `files`, so it must've been the list of files.
async function addFiles(files) {
  // ...
}

// You search for usages of addFiles, and you found this:
addFiles([{file, width: 500, target: 'PROFILE_PHOTO', user}])
addFiles([{file, language: 'JS', type: 'CODE_SNIPPET', user}])

// WAIT WHAT? The parameter isn't actually array of files?
// The name is deceptive as heck.
// What does the parameter actually takes as input?

// The function signature isn't very helpful,
// so you need to take a look at the logic...
async function addFiles(files) {
  for (const {file, type, user, width, target} of files) {
    if (target === 'PROFILE_PHOTO') {
      let source = file
      if (width > 500) source = await resize(file)

      return upload(source, '/users/profiles/')
    }
  }
}

// In a dynamically-typed language,
// it is very easy to lie about your intent with namings.
// Most of the time, this is not intended.
