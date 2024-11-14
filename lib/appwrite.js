// import {
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   ID,
//   Query,
// } from "react-native-appwrite";

// export const appwriteConfig = {
//   endpoint: "https://cloud.appwrite.io/v1",
//   platform: "com.zmhs.fit",
//   projectId: "67354798003ce12867ad",
//   databaseId: "6735488c001c5e9f2bd1",
//   userCollectionId: "6735489e00353adb6faf",
// };

// const client = new Client();

// client
//   .setEndpoint(appwriteConfig.endpoint)
//   .setProject(appwriteConfig.projectId)
//   .setPlatform(appwriteConfig.platform);

// const account = new Account(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client);

// // Register user
// export async function createUser(email, password, username) {
//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       username
//     );

//     if (!newAccount) throw Error;

//     const avatarUrl = avatars.getInitials(username);

//     await signIn(email, password);

//     const newUser = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       ID.unique(),
//       {
//         accountId: newAccount.$id,
//         email: email,
//         username: username,
//         avatar: avatarUrl,
//       }
//     );

//     return newUser;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// // Sign In
// export async function signIn(email, password) {
//   try {
//     const session = await account.createSession(email, password);

//     return session;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// // Get Account
// export async function getAccount() {
//   try {
//     const currentAccount = await account.get();

//     return currentAccount;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// // Get Current User
// export async function getCurrentUser() {
//   try {
//     const currentAccount = await getAccount();
//     if (!currentAccount) throw Error;

//     const currentUser = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       [Query.equal("accountId", currentAccount.$id)]
//     );

//     if (!currentUser) throw Error;

//     return currentUser.documents[0];
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// // Sign Out
// export async function signOut() {
//   try {
//     const session = await account.deleteSession("current");

//     return session;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
