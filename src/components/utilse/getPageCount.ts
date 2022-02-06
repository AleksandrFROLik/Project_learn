export const GetPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
};

export const getPagesArray = (totalPages:number) => {
    let result:number[] = []
    for (let i = 1; i <= totalPages; i++) {
         result.push(i)
    }
    return result
}


