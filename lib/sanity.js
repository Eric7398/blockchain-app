import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '4q70y2pz',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skCykhIRAtcdCuNVQhLHcXyfK1SQ9QFrrybLcnMhB8gLb9G5mz40ikKJ9JhTauZvVYJ4OC8rVzu5iwGOTIPUgRy8lX915h3baC2oorexVduPHVb5aMllSURDtjatlBLHMCAqjXwDTAfZ3kkZDMlP9hpLYESDDte6fOyurGPvHumSebFj9r0P',
    useCdn: false,
})