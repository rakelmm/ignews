 import { getPrismicClient } from '../../services/prismic';

// import { render, screen } from '@testing-library/react';
// import { mocked } from 'jest-mock';
// import { useSession } from 'next-auth/react';
// import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';

// jest.mock('../../services/stripe')

// const post = {
//     slug: 'fake-slug',
//     title: 'Fake title 1',
//     content: '<p>Fake excerpt 1</p>',
//     updated_at: '2020-01-01',
// };

// jest.mock("next-auth/react");
// jest.mock('../../services/prismic')

// describe('Post preview page', () => {
//     it('renders correctly', () => {
//         const useSessionMocked = mocked(useSession)

//         useSessionMocked.mockReturnValueOnce(null, false)

//        render(<Post post={post} />)

//         expect(screen.getByText('My New Post')).toBeInTheDocument();
//         expect(screen.getByText('Post excerpt')).toBeInTheDocument();
//         expect(screen.getByText('Wanna ontinue reading?')).toBeInTheDocument();

//     });


//     it('redirects user to full post when user is subscribed', async () => {
//         const useSessionMocked = mocked(useSession);

//         useSessionMocked.mockReturnValueOnce([
//             false
//         ])

//     });
        

// //     it('loads initial data', async () => {
// //         const getSessionMocked = mocked(getSession);
// //         const getPrismicClientMocked = mocked(getPrismicClient);

// //         getSessionMocked.mockResolvedValueOnce({
// //             activeSubscription: 'fake-subscription-id',
// //         } as any);

// //         getPrismicClientMocked.mockReturnValueOnce({
// //             getByUID: jest.fn().mockResolvedValueOnce(
// //                 {
// //                     uid: 'fake-slug',
// //                     data: {
// //                         title: 'Fake title 1',
// //                         content: [
// //                             {
// //                                 type: 'paragraph',
// //                                 text: 'Fake excerpt 1',
// //                             },
// //                         ],
// //                     },
// //                     last_publication_date: '2020-01-01',
// //                 },
// //             ),
// //         } as any);

// //         const response = await getServerSideProps({
// //             params: {
// //                 slug: 'fake-slug',
// //             },
// //         } as any);

// //         expect(response).toEqual(
// //             expect.objectContaining({
// //                 props: {
// //                     post: {
// //                         slug: 'fake-slug',
// //                         title: 'Fake title 1',
// //                         content: '<p>Fake excerpt 1</p>',
// //                         updated_at: '01 de janeiro de 2020',
// //                     }
// //                 }
// //             })
// //         )
// //     });
// // });