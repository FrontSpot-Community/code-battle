
export async function findAndCount(
    filter = {},
    skipLimit = null,
    sort = null,
    populate = null
) {
    const [count, data] = await Promise.all([
        this.count(filter),
        this.find(filter, null, skipLimit).sort(sort)
    ]);
    return {
        count,
        data
    };
}
