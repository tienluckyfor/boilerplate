import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

export default function Example() {
    return (
        <div className="flex space-x-3">
            {/*<label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
            </label>*/}
            <select
                id="location"
                name="location"
                className=" block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-indigo-700 text-white"
                defaultValue="Canada"
            >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>

            <button
                type="button"
                className="inline-flex items-center p-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    )
}
