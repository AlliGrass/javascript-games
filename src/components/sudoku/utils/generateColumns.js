export default function generateColumn() {
    const columns = {}

    for (let i = 0; i < 9; i++) {

        const blocks = []
        i < 3? blocks.push(1, 4, 7) : i < 6? blocks.push(2, 5, 8) : blocks.push(3, 6, 9)

        const firstRow = i % 3 + 1
        const cells = [firstRow, firstRow+3, firstRow+6]

        const columnSections = blocks.map((block, index) => {
            return cells.map((cell, index) => {
                return `${block}${cell}`
            })
        })

        columns[i+1] = [].concat(...columnSections)
    }

    return columns
}