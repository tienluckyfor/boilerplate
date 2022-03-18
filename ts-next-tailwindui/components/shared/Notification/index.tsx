/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Transition} from '@headlessui/react'
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/outline'
import {XIcon} from '@heroicons/react/solid'
import toast from "react-hot-toast";
import useToast from "./useToast";
import classNames from "classnames";

type contentType = {
    content: React.ReactNode | String;
}

export class notify {

    static success(content: contentType) {
        return toast.custom((t) => (
            <NotifyRender
                isSuccess={true}
                visible={t.visible}
                content={content}
                onClose={() => toast.remove(t.id)}
            />
        ));
    }

    static error(content: contentType) {
        return toast.custom((t) => (
            <NotifyRender
                isError={true}
                visible={t.visible}
                content={content}
                onClose={() => toast.remove(t.id)}
            />
        ));
    }
}

interface INotification {
    content: contentType;
    onClose?: Function;
    visible?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
}

export function NotifyRender({isError, isSuccess, visible, content, onClose}: INotification) {
    useToast();
    return (
        <div
            aria-live="assertive"
            className="w-full flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={visible}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className={classNames('max-w-sm w-full bg-white rounded-lg pointer-events-auto overflow-hidden shadow-lg ring-1',
                            isSuccess ? 'ring-black ring-opacity-5' : '',
                            isError ? 'ring-red-500 ring-opacity-30' : ''
                        )}>
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    {isSuccess &&
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true"/>
                                    }
                                    {isError &&
                                        <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true"/>
                                    }
                                </div>
                                <div className="ml-3 w-0 flex-1">
                                    <p className={classNames(
                                        isError ?? 'text-red-500',
                                        isSuccess ?? 'text-gray-500',
                                    )}>{content}</p>
                                </div>
                                <div className="ml-4 flex-shrink-0 flex">
                                    <button
                                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => onClose(true)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon className="h-5 w-5" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}
