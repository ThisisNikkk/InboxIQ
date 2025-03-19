const addressesToUpsert = new Map()
const email = {
    from: { address: 'developer.nikk@gmail.com', name: 'Nikhil Siwan' },
    to: [{ address: 'nikhilsiwan77@gmail.com', name: 'Nikhil Siwan' }],
    cc: [],
    bcc: [],
    replyTo: [],
}
const all = [email.from, ...email.to, ...email.cc, ...email.bcc, ...email.replyTo]
// console.log('all', JSON.stringify(all, null, 2))
for (const address of all) {
    addressesToUpsert.set(address.address, address);
}
for (const address of addressesToUpsert.values()) {
    console.log('address', address)
}

// console.log('addressesToUpsert', JSON.stringify(addressesToUpsert.entries(), null, 2))

// const upsertedAddresses: (Awaited<ReturnType<typeof upsertEmailAddress>> | null)[] = [];
// console.log('upserting addresses', JSON.stringify(addressesToUpsert.values(), null, 2))

// for (const address of addressesToUpsert.values()) {
//     const upsertedAddress = await upsertEmailAddress(address, accountId);
//     upsertedAddresses.push(upsertedAddress);
// }