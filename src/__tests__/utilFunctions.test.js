import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

describe('Unit testing', () => {
    test('shortenText does not alter string under 100 characters', () => {
        expect(shortenText(shortText)).toHaveLength(29)
    });

    test('shortenText shortens text over 100 characters and adds periods', () => {
        const shortened = shortenText(longText)
        expect(shortened).not.toHaveLength(longText.length)
        expect(shortened.slice(-3)).toBe('...')
    });

    test('wordCount correctly sums the numbers of words in a post', () => {
        expect(wordCount(posts)).toBe(233)
    });

    test('attachUserName correctly attaches username to posts', () => {
        const newPosts = attachUserName(users, posts)
        expect(newPosts[0]).toHaveProperty('displayName')
    });

    test('attachUserName should remove posts with no matching user', () => {
        const newPosts = attachUserName(users, posts)
        const deletedPost = posts[5]
        expect(newPosts).not.toContainEqual(deletedPost)
    })
})